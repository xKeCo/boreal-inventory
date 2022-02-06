import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "../config/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const Context = createContext({});

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userData, setUserData] = useState(true);
  const db = getFirestore(app);

  const handleUser = async (user) => {
    if (user) {
      const docsRef = doc(db, "users", user.uid);
      const info = await getDoc(docsRef);
      setUserData(info.data());
      setUser(user);
      setLoadingUser(false);
    } else {
      setUser(null);
      setLoadingUser(false);
    }
  };

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, handleUser);

    return () => unsubscribe();
  }, []);

  return (
    <Context.Provider value={{ user, userData, setUserData, loadingUser }}>
      {children}
    </Context.Provider>
  );
};
