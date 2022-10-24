import { ReactElement, useState } from 'react'
import classNames from 'classnames'

import Overlay from 'components/common/overlay'
import HeaderMenuDrawer from '../menuDrawer'
import styles from './index.module.css'

const UserNotification = (): ReactElement => {
  const [showMenus, setShowMenus] = useState<boolean>(false)

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
            variant={showMenus ? 'times' : 'bell'}
            noClick
          ></kaskus-icon>
        </span>
        <HeaderMenuDrawer
          isShow={showMenus}
          className={styles['notification-drawer']}
        >
          <div className="flex w-full flex-wrap">
            <div className="flex flex-wrap">
              <div className="flex w-full items-center justify-between p-4">
                <span className="text-sm ">Notifications</span>
                <a href="">
                  <kaskus-icon
                    size="medium"
                    variant="cog"
                    noClick
                    noPadding
                  ></kaskus-icon>
                </a>
              </div>
              <div className="flex w-full items-center border border-blue p-4 text-sm text-primary dark:border-blue-night dark:text-primary-night">
                <span className="mr-2 flex h-8 w-8 flex-shrink-0 items-center">
                  <kaskus-icon
                    size="large"
                    variant="bell"
                    noClick
                    noPadding
                  ></kaskus-icon>
                </span>
                <span>
                  Sering ketinggalan thread-thread SERU? KASKUS bisa kasih Agan
                  update LOH!&nbsp;
                  <strong className="font-medium text-blue dark:text-blue-night">
                    Aktifkan Notifikasi Sekarang!
                  </strong>
                </span>
              </div>
            </div>
            <ul className="flex w-full flex-wrap">
              <li
                className={classNames(
                  styles['notification-item'],
                  'dark:border-grey-6 dark:bg-grey-8',
                )}
              >
                <a href="" className="flex w-full items-center p-4">
                  <span className="mr-2 h-8 w-8 flex-shrink-0">
                    <img
                      src="https://s.kaskus.id/assets/wap_1.0/images/icon-notification-follow.svg"
                      alt="notification-follow"
                      className="block w-full"
                    />
                  </span>
                  <div className="text-sm">
                    <span className="text-primary dark:text-primary-night">
                      <span className="font-semibold">provocator3301</span>,
                      <span className="font-semibold">provocator.3301</span> dan
                      <span className="font-semibold">kamujahat.21.</span>, dan
                      <span className="font-semibold">1</span> orang lainnya
                      mulai mengikuti Agan
                    </span>
                    <span className="text-xs text-grey-2 dark:text-grey-4">
                      30-08-2022 12:56
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="flex w-full justify-center text-center">
              <a className="p-4 text-blue dark:text-blue-night">Lihat semua</a>
            </div>
          </div>
        </HeaderMenuDrawer>
        {showMenus && (
          <Overlay onClick={() => setShowMenus(false)} zIndex={19} />
        )}
      </div>
    </>
  )
}

export default UserNotification
