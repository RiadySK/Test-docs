import classNames from 'classnames'
import { ReactElement, useState } from 'react'
import { useUser } from 'services/user'
import Overlay from 'components/common/overlay'
import Icon from 'components/common/icon'
import HeaderMenuDrawer from '../menuDrawer'
import styles from './index.module.css'

const UserMenu = (): ReactElement => {
  const [showMenus, setShowMenus] = useState<boolean>(false)
  const { data, isLoading } = useUser()

  if (isLoading && !data?.data) {
    return <></>
  }

  return (
    <>
      <div className="relative">
        <span
          className={classNames(
            'relative block cursor-pointer rounded-lg p-2 text-sm hover:bg-grey-2 dark:hover:bg-grey-7 lg:dark:hover:bg-grey-8',
            showMenus && 'z-50 bg-grey-2 dark:bg-grey-7',
          )}
          onClick={() => setShowMenus(!showMenus)}
        >
          <Icon variant={showMenus ? 'times' : 'user'} />
        </span>
        <HeaderMenuDrawer isShow={showMenus}>
          <div className="flex flex-wrap lg:w-60">
            <a
              className="flex w-full items-center border-b border-grey-3 p-4 dark:border-grey-6"
              href=""
            >
              <span className="mr-2 h-4 w-4 overflow-hidden rounded-full border-2 border-grey-2">
                <img
                  src={data?.data.avatar}
                  className="block w-full"
                  alt={data?.data.username}
                />
              </span>
              <span>{data?.data.username}</span>
            </a>
            <ul
              className={classNames(
                styles['userMenu-container'],
                'no-scrollbar',
              )}
            >
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
                    <Icon variant="comments" className="!h-4 !w-4 !text-sm" />
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
                    <Icon
                      variant="shopping-cart"
                      className="!h-4 !w-4 !text-sm"
                    />
                  </span>
                  <span className="text-sm">Aktivitas Jual Beli</span>
                </a>
              </li>{' '}
              <li
                className={classNames(
                  styles['userMenu-item'],
                  'dark:border-grey-6',
                )}
              >
                <a href="" className="flex w-full items-center p-4">
                  <span className="mr-2 h-4 w-4">
                    <Icon variant="envelope" className="!h-4 !w-4 !text-sm" />
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
                    <Icon variant="cog" className="!h-4 !w-4 !text-sm" />
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
                    <Icon variant="sign-out" className="!h-4 !w-4 !text-sm" />
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
