import classNames from 'classnames'
import { ReactElement, useState } from 'react'
import Overlay from 'components/common/overlay'
import HeaderMenuDrawer from '../menuDrawer'
import styles from './index.module.css'
import { useUser, useUserMock } from 'services/user'

const UserMenu = (): ReactElement => {
  const [showMenus, setShowMenus] = useState<boolean>(false)
  const { data, isLoading } = useUserMock()

  if (isLoading && !data?.data) {
    return <></>
  }

  return (
    <>
      <div className="relative">
        <span
          className={classNames(
            'relative block cursor-pointer rounded-lg text-sm hover:bg-grey-2 dark:hover:bg-grey-8',
            showMenus && 'z-50 bg-grey-2 dark:bg-grey-8',
          )}
          onClick={() => setShowMenus(!showMenus)}
        >
          <kaskus-icon
            size="medium"
            variant={showMenus ? 'times' : 'user'}
            noClick
          ></kaskus-icon>
        </span>
        <HeaderMenuDrawer isShow={showMenus}>
          <div className="flex flex-wrap">
            <a
              className="flex w-full items-center border-b border-grey-3 p-4 dark:border-grey-6"
              href=""
            >
              <span className="mr-2 h-4 w-4 overflow-hidden rounded-full border-2 border-grey-2">
                <img
                  src={data?.data.avatar.url}
                  className="block w-full"
                  alt={data?.data.avatar.name}
                />
              </span>
              <span>{data?.data.name}</span>
            </a>
            <ul className="flex w-full flex-wrap">
              <li
                className={classNames(
                  styles['userMenu-item'],
                  'dark:border-grey-6',
                )}
              >
                <a href="" className="flex w-full items-center p-4">
                  <span className="mr-2 h-4 w-4">
                    <img
                      src="https://s.kaskus.id/assets/wap_1.0/images/visualita-live-posting.svg"
                      alt="icon-liveposting"
                      className="block w-full"
                    />
                  </span>
                  <span className="text-sm">Live Posting</span>
                </a>
              </li>
              <li
                className={classNames(
                  styles['userMenu-item'],
                  'dark:border-grey-6',
                )}
              >
                <a href="" className="flex w-full items-center p-4">
                  <span className="mr-2 h-4 w-4">
                    <img
                      src="https://s.kaskus.id/assets/wap_1.0/images/visualita-kreator.svg"
                      className="block w-full"
                      alt="icon-kaskus-kreator"
                    />
                  </span>
                  <span className="text-sm">Kaskus Kreator</span>
                </a>
              </li>
              <li
                className={classNames(
                  styles['userMenu-item'],
                  'dark:border-grey-6',
                )}
              >
                <a href="" className="flex w-full items-center p-4">
                  <span className="mr-2 h-4 w-4">
                    <img
                      src="https://s.kaskus.id/assets/wap_1.0/images/visualita-kaskus-coin.svg"
                      className="block w-full"
                      alt="icon-kaskus-koin"
                    />
                  </span>
                  <span className="text-sm">Kaskus Join</span>
                </a>
              </li>
              <li
                className={classNames(
                  styles['userMenu-item'],
                  'dark:border-grey-6',
                )}
              >
                <a href="" className="flex w-full items-center p-4">
                  <span className="mr-2 h-4 w-4">
                    <kaskus-icon
                      size="small"
                      variant="comments"
                      noPadding
                      noClick
                    ></kaskus-icon>
                  </span>
                  <span className="text-sm">Aktivitas Forum</span>
                </a>
              </li>
              <li
                className={classNames(
                  styles['userMenu-item'],
                  'dark:border-grey-6',
                )}
              >
                <a href="" className="flex w-full items-center p-4">
                  <span className="mr-2 h-4 w-4">
                    <kaskus-icon
                      size="small"
                      variant="shopping-cart"
                      noPadding
                      noClick
                    ></kaskus-icon>
                  </span>
                  <span className="text-sm">Aktivitas Jual Beli</span>
                </a>
              </li>
              <li
                className={classNames(
                  styles['userMenu-item'],
                  'dark:border-grey-6',
                )}
              >
                <a href="" className="flex w-full items-center p-4">
                  <span className="mr-2 h-4 w-4">
                    <kaskus-icon
                      size="small"
                      variant="envelope"
                      noPadding
                      noClick
                    ></kaskus-icon>
                  </span>
                  <span className="text-sm">Kotak Pesan</span>
                </a>
              </li>
              <li
                className={classNames(
                  styles['userMenu-item'],
                  'dark:border-grey-6',
                )}
              >
                <a href="" className="flex w-full items-center p-4">
                  <span className="mr-2 h-4 w-4">
                    <kaskus-icon
                      size="small"
                      variant="cog"
                      noPadding
                      noClick
                    ></kaskus-icon>
                  </span>
                  <span className="text-sm">Pengaturan Akun</span>
                </a>
              </li>
              <li
                className={classNames(
                  styles['userMenu-item'],
                  'dark:border-grey-6',
                )}
              >
                <a href="" className="flex w-full items-center p-4">
                  <span className="mr-2 h-4 w-4">
                    <kaskus-icon
                      size="small"
                      variant="sign-out"
                      noPadding
                      noClick
                    ></kaskus-icon>
                  </span>
                  <span className="text-sm">Keluar</span>
                </a>
              </li>
            </ul>
          </div>
        </HeaderMenuDrawer>
        {showMenus && (
          <Overlay onClick={() => setShowMenus(false)} zIndex={19} />
        )}
      </div>
    </>
  )
}

export default UserMenu
