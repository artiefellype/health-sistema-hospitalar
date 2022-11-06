import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../src/contexts/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Home from "../src/components/Home";

function MyApp({ Component, pageProps, router }: AppProps) {

// FUNCAO DE LOADING NA TELA DURANTE MODIFICACAO DAS ROTAS

  // function Loading() {
  //   const router = useRouter();
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     const hanldeStart = (url: any) =>
  //       url !== router.asPath && setLoading(true);
  //     const handleComplete = (url: any) =>
  //       url === router.asPath &&
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 5000);

  //     router.events.on("routeChangeStart", hanldeStart);
  //     router.events.on("routeChangeComplete", handleComplete);
  //     router.events.on("routeChangeError", handleComplete);

  //     return () => {
  //       router.events.off("routeChangeStart", hanldeStart);
  //       router.events.off("routeChangeComplete", handleComplete);
  //       router.events.off("routeChangeError", handleComplete);
  //     };
  //   });

  //   if (loading) {
  //     return <div className="spinner-wrapper"> <div className="spinner" /> </div>
  //   }
  //   return null

  // }
  if (router.pathname.includes("/sistema")) {
    return (
      <AuthProvider>
    <> 
      <Home>
        <Component {...pageProps} />
      </Home>
    </>
  </AuthProvider>
    );
  }
  return (
    <AuthProvider>
      <> 
        <Component {...pageProps} />
      </>
    </AuthProvider>
  );
}

export default MyApp;
