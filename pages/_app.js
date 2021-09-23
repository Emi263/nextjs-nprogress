import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "../public/nprogress.css"; //import css file, you can customize it

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const start = () => NProgress.start(); //start progress
    const stop = () => NProgress.done(); //end progress
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", stop);
    router.events.on("routeChangeError", stop);
    //unsubscribe when component unmounts
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", stop);
      router.events.off("routeChangeError", stop);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
