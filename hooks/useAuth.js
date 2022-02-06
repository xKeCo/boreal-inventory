import { Context } from "../context/AppContext";
import { useContext } from "react";
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut as signOutAuth,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { errorConfigTop } from "../config/toastConfig";
import { app } from "../config/firebase";

const useAuth = () => {
  const { user, userData, loadingUser } = useContext(Context);
  const auth = getAuth(app);

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-email"
      ) {
        toast.error(
          "El usuario y/o la contraseña es incorrecta.",
          errorConfigTop
        );
      }
    }
  };

  const signOut = async () =>
    await signOutAuth(auth).catch((error) =>
      toast.error(error.message, errorConfigTop)
    );

  return {
    user,
    userData,
    loadingUser,
    signIn,
    signOut,
  };
};

export default useAuth;
