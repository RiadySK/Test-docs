import BodyThemeContextProvider from 'contexts/theme'
import { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'
import ChannelBar from 'components/_layout/global/channelBar'

type MyProps = {
  children: ReactNode
}

const LayoutDesktop = ({ children }: MyProps) => {
  return (
    <BodyThemeContextProvider>
      <div className="flex flex-wrap bg-grey-1 dark:bg-black">
        <Header />
        <ChannelBar />
        <div className="relative mx-auto flex min-h-screen max-w-1440p">
          {children}
        </div>
        <Footer />
      </div>
    </BodyThemeContextProvider>
  )
}

export default LayoutDesktop
