import { AppContextProvider } from "../context/AppContext";
import { Toaster } from "react-hot-toast";
import { globalConfig } from "../config/toastConfig";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={globalConfig}
      />
    </AppContextProvider>
  );
}

export default MyApp;
