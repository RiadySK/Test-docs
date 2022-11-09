import { ReactElement, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import Button from 'components/common/button'
import Create from 'components/_layout/global/create'
import UserMenu from 'components/_layout/global/userMenu'
import LoginModal from 'components/_layout/global/loginModal'
import UserNotification from 'components/_layout/global/userNotification'
import Search from './search'

const Header = (): ReactElement => {
  const { theme } = useTheme()
  const [logoURL, setLogoUrl] = useState('logo-kaskus-white.png')

  useEffect(() => {
    if (!theme) return
    const themeLogo =
      theme === 'dark' ? 'logo-kaskus-white.png' : 'logo-kaskus-full.svg'
    return setLogoUrl(themeLogo)
  }, [theme])

  return (
    <>
      <div className="sticky top-0 left-0 z-50 w-full border-b border-grey-2 bg-white dark:border-grey-6 dark:bg-grey-7">
        <div className="mx-auto flex w-full justify-between px-1 pt-2 pb-2 xl:max-w-7xl">
          <div className="flex items-center">
            <div className="relative mr-2 flex-shrink-0">
              <img
                src={`https://s.kaskus.id/assets/wap_1.0/images/${logoURL}`}
                alt="Kaskus"
                width={128}
                height={20}
              />
            </div>
            <div className="ml-6 mr-4 whitespace-nowrap px-1 text-base font-medium text-grey-5 dark:text-white">
              <a>Forum</a>
            </div>
            <div className="mr-4 whitespace-nowrap px-1 text-base font-medium text-grey-5 dark:text-white">
              <a>TV</a>
            </div>
            <div className="mr-4 whitespace-nowrap px-1 text-base font-medium text-grey-5 dark:text-white">
              <a>Jual Beli</a>
            </div>
          </div>
          <div className="ml-16 flex flex-grow items-center">
            <div className="relative z-10 flex-1">
              <Search />
            </div>
            <div className="ml-2">
              <Create />
            </div>
            <LoginModal />
            {/* if Login */}
            <div className="ml-2">
              <UserNotification />
            </div>
            <div className="ml-2">
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
