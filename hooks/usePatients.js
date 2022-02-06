import { useEffect, useState } from "react";
import {
  query,
  collection,
  getDocs,
  getFirestore,
  orderBy,
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
      const patients = await getDocs(docsRef);
      const docs = patients.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDocs(docs);
      setLoading(false);
    } catch (error) {
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
