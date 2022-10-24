import { ReactElement, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useBodyTheme } from 'contexts/theme'
import SearchResult from './searchResult'
import NavigationDrawer from './navigationDrawer'
import UserMenu from 'components/_layout/global/userMenu'
import UserNotification from 'components/_layout/global/userNotification'

const Header = (): ReactElement => {
  const { theme } = useTheme()
  const { isNight } = useBodyTheme()
  const [logoURL, setLogoUrl] = useState<string>('logo-kaskus-white.png')
  const [isShowSearchResult, setShowSearchResult] = useState<boolean>(false)

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
            <span
              onClick={() => {
                setShowSearchResult((isShowSearchResult) => !isShowSearchResult)
              }}
            >
              <kaskus-icon
                size="medium"
                variant={isShowSearchResult ? 'times' : 'search'}
              ></kaskus-icon>
            </span>
            {/* <span className="mr-1 text-sm dark:text-white">
              <kaskus-button text="Masuk" variant="primary"></kaskus-button>
            </span> */}
            {/* if Login */}
            <UserNotification />
            <UserMenu />
          </div>
        </div>
        <SearchResult
          isShow={isShowSearchResult}
          onClose={() => setShowSearchResult(false)}
        />
      </div>
    </>
  )
}

export default Header
