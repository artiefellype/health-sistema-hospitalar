import "../styles/globals.css";
import type { AppProps } from "next/app";
import Dashboard from "./Home";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {isLogged && <Component {...pageProps} />}
      {!isLogged && (
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
      )}
    </>
  );
}

export default MyApp;
