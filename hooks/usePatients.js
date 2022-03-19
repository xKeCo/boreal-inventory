import { useEffect, useState } from "react";
import {
  query,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  limit,
} from "firebase/firestore";
import { app } from "../config/firebase";

const usePatients = () => {
  const db = getFirestore(app);
  const [docs, setDocs] = useState([]);
  // loader
  const [loading, setLoading] = useState(true);
  // error
  const [error, setError] = useState(null);

  const getPatientsData = async () => {
    try {
      const docsRef = collection(db, "patients");
      const q = query(
        docsRef,
        orderBy("date", "desc"),
        orderBy("time", "desc"),
        limit(10)
      );
      const patients = await getDocs(q);
      const docs = patients.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDocs(docs);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPatientsData();
  }, []);

  return {
    docs,
    loading,
    error,
    getPatientsData,
  };
};

export default usePatients;
