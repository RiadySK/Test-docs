import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  React.useEffect(() => {
    import("../script/eternals.es").then(({ default: reload }) => {
      const handleRouteChange = () => {
        reload();
      }

      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      }
    });
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
