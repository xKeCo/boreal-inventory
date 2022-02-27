import { AppContextProvider } from "../context/AppContext";
import { Toaster } from "react-hot-toast";
import { globalConfig } from "../config/toastConfig";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Head>
        <meta name="theme-color" content="#fff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="https://boreal-inventory.vercel.app/Logo.png" />
        <link
          rel="apple-touch-icon"
          href="https://boreal-inventory.vercel.app/Logo.png"
        />
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
