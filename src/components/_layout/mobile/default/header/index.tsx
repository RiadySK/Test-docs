import { ReactElement, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useBodyTheme } from 'contexts/theme'
import UserMenu from 'components/_layout/global/userMenu'
import UserNotification from 'components/_layout/global/userNotification'
import LoginModal from 'components/_layout/global/loginModal'
import Search from './search'
import NavigationDrawer from './navigationDrawer'

const Header = (): ReactElement => {
  const { theme } = useTheme()
  const { isNight } = useBodyTheme()
  const [logoURL, setLogoUrl] = useState<string>('logo-kaskus-white.png')

  useEffect(() => {
    if (!theme) return

    const themeLogo = isNight ? 'logo-kaskus-white.png' : 'logo-kaskus-full.svg'

    setLogoUrl(themeLogo)
  }, [theme])

  return (
    <>
      <div className="sticky top-0 left-0 z-50 w-full border-b border-grey-2 bg-white dark:border-grey-5 dark:bg-grey-7">
        <div className="mx-auto flex w-full justify-between p-2">
          <div className="flex items-center">
            <NavigationDrawer />
            <div className="relative ml-1">
              <img
                src={`https://s.kaskus.id/assets/wap_1.0/images/${logoURL}`}
                alt="Kaskus"
                width={128}
                height={20}
              />
            </div>
          </div>
          <div className="flex items-center">
            {/* <span className="mr-1 text-sm dark:text-white">
              <Button type="blue">Masuk</Button>
            </span> */}
            <Search />
            <LoginModal />
            {/* if Login */}
            <UserNotification />
            <UserMenu />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
