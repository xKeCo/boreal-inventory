import { AppContextProvider } from "../context/AppContext";
import { Toaster } from "react-hot-toast";
import { globalConfig } from "../config/toastConfig";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="icon" href="/logo.svg" />
        <meta name="theme-color" content="#fff" />
      </Head>
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
