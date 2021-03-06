import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "./Loader";

const WithAuth = (Component, config) => {
  const ChildrenComponent = (props) => {
    const { user, loadingUser, userData } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loadingUser && !user && !config?.isAuthPage) {
        router.replace("/");
      }
      if (
        !loadingUser &&
        user &&
        config?.isAuthPage &&
        userData.role === "admin"
      ) {
        router.replace("/home");
      }
      if (
        !loadingUser &&
        user &&
        config?.isAuthPage &&
        userData.role === "doctor"
      ) {
        router.replace("/profile");
      }
    }, [user, loadingUser, router]);

    return (
      <>
        {loadingUser ? (
          <Loader />
        ) : user && !config?.isAuthPage ? (
          <Component {...props} />
        ) : !user && config?.isAuthPage ? (
          <Component {...props} />
        ) : (
          <Loader />
        )}
      </>
    );
  };

  return ChildrenComponent;
};

export default WithAuth;
