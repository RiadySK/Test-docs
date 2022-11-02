import { ReactNode } from 'react'
import BodyThemeContextProvider from 'contexts/theme'
import Header from './header'
import Footer from './footer'
import ChannelBar from 'components/_layout/global/channelBar'

type MyProps = {
  children: ReactNode
}

const LayoutMobile = ({ children }: MyProps) => {
  return (
    <BodyThemeContextProvider>
      <div className="relative mx-auto flex flex-wrap bg-white dark:bg-black sm:max-w-lg">
        <Header />
        <ChannelBar />
        <div className="mx-auto min-h-screen w-full">{children}</div>
        <Footer />
      </div>
    </BodyThemeContextProvider>
  )
}

export default LayoutMobile
