import { ReactElement, useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

import { useBodyTheme } from 'contexts/theme'
import UserMenu from 'components/_layout/global/userMenu'
import UserNotification from 'components/_layout/global/userNotification'
import Overlay from 'components/common/overlay'
import { SearchBox } from 'components/common/input'
import SearchResult from './searchResult'
import Modal from 'components/common/modal'
import LoginModal from 'components/_layout/global/loginModal'

interface HeaderProps {
  className?: string
}

const Header = ({ className }: HeaderProps): ReactElement => {
  const { theme, setTheme } = useTheme()
  const { isNight } = useBodyTheme()
  const [logoURL, setLogoUrl] = useState('logo-kaskus-white.png')
  const [isShowSearchDialog, setShowSearchDialog] = useState<boolean>(false)
  const searchBoxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!theme) return
    const themeLogo =
      theme === 'dark' ? 'logo-kaskus-white.png' : 'logo-kaskus-full.svg'
    return setLogoUrl(themeLogo)
  }, [theme])

  const [keyword, setKeyword] = useState<string>('')

  const handleKeywordInput = (keyword: string) => {
    setKeyword(keyword)
  }

  const handleSearchFocus = (status: boolean) => {
    setShowSearchDialog(status)
  }

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
            <div className="relative flex-1">
              <SearchBox
                className="z-10 flex-shrink-0 flex-grow"
                onChange={handleKeywordInput}
                onFocus={handleSearchFocus}
                value={keyword}
                ref={searchBoxRef}
              ></SearchBox>
              {isShowSearchDialog && (
                <>
                  <SearchResult keyword={keyword} />
                  <Overlay
                    onClick={() => setShowSearchDialog(false)}
                    zIndex={1}
                  />
                </>
              )}
            </div>
            <div className="ml-2">
              <kaskus-button
                text="Buat Thread"
                variant="secondary"
              ></kaskus-button>
            </div>
            <LoginModal />

            {/* 
            <span
              className="ml-1 cursor-pointer"
              onClick={() => setTheme(isNight ? 'light' : 'dark')}
            >
              <kaskus-icon size="medium" variant="cog"></kaskus-icon>
            </span> */}
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
