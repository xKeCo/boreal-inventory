import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../config/firebase";

const useInventory = () => {
  const db = getFirestore(app);
  const [inventory, setInventory] = useState([]);
  // loader
  const [loading, setLoading] = useState(true);
  // error
  const [error, setError] = useState(null);

  const getInventoryData = async () => {
    try {
      const docsRef = collection(db, "inventory");
      const Inventory = await getDocs(docsRef);
      const docs = Inventory.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInventory(docs);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getInventoryData();
  }, []);

  return {
    inventory,
    loading,
    error,
    getInventoryData,
  };
};

export default useInventory;
