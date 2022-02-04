import { Context } from "../context/AppContext";
import { useContext } from "react";
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut as signOutAuth,
} from "firebase/auth";
import { app } from "../config/firebase";

const useAuth = () => {
  const { user, loadingUser } = useContext(Context);
  const auth = getAuth(app);

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () =>
    await signOutAuth(auth).catch((error) =>
      toast.error(error.message, errorConfigTop)
    );

  return {
    user,
    loadingUser,
    signIn,
    signOut,
  };
};

export default useAuth;
