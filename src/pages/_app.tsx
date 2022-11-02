import type { AppType } from 'next/dist/shared/lib/utils'
import { SWRConfig } from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'

import 'styles/fontawesome.min.css'
import 'styles/fonts.css'
import 'styles/globals.css'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      ;(window as any).eternal.reinit()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url, { credentials: 'include' }).then((res) => {
            if (!res.ok) {
              // Should throw error - need to revisit
              return Promise.reject(res)
            }
            return res.json()
          }),
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp
