import type { AppType } from 'next/dist/shared/lib/utils'
import { SWRConfig } from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'

import 'styles/fonts.css'
import 'styles/globals.css'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  // const [queryClient] = React.useState(() => new QueryClient());
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
    // <QueryClientProvider client={queryClient}>
    <SWRConfig
      value={{ fetcher: (url: string) => fetch(url).then((res) => res.json()) }}
    >
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
    // <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>
  )
}

export default MyApp
