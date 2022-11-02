import { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'
import BodyThemeContextProvider from 'contexts/theme'

type MyProps = {
  children: ReactNode
}

const LayoutMobile = ({ children }: MyProps) => {
  return (
    <BodyThemeContextProvider>
      <div className="relative mx-auto flex flex-wrap bg-white dark:bg-black md:max-w-lg">
        <Header />
        <div className="mx-auto min-h-screen">{children}</div>
        <Footer />
      </div>
    </BodyThemeContextProvider>
  )
}

export default LayoutMobile
