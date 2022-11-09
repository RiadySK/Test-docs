import { ReactElement, useState } from 'react'
import classNames from 'classnames'

import { useNotification } from 'services/notification'
import { parseDate } from 'utils/date'
import Overlay from 'components/common/overlay'
import Icon from 'components/common/icon'
import HeaderMenuDrawer from '../menuDrawer'
import styles from './index.module.css'

const UserNotification = (): ReactElement => {
  const [showMenus, setShowMenus] = useState<boolean>(false)
  const { data, isLoading } = useNotification()

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
          <Icon variant={showMenus ? 'times' : 'bell'} />
        </span>
        <HeaderMenuDrawer
          isShow={showMenus}
          className={styles['notification-drawer']}
        >
          <div className="flex w-full flex-wrap">
            <div className="flex flex-wrap">
              <div className="flex w-full items-center justify-between p-4">
                <span className="text-sm ">Notifications</span>
                <a href="/notification/settings">
                  <Icon className="!h-4 !w-4 !text-xs" variant="cog" />
                </a>
              </div>
              <div className="flex w-full items-center border border-blue p-4 text-sm text-primary dark:border-blue-night dark:text-primary-night">
                <span className="mr-2 flex h-8 w-8 flex-shrink-0 items-center overflow-hidden rounded-full bg-blue p-2 dark:bg-blue-night">
                  <Icon
                    className="!h-4 !w-4 !text-xs text-white"
                    variant="bell"
                  />
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
            {!isLoading && data?.data && (
              <ul className={styles['notification-container']}>
                {data.data.notifications.map((item, index) => {
                  return (
                    <li
                      className={classNames(
                        styles['notification-item'],
                        'no-scrollbar',
                      )}
                      key={index + item.id}
                    >
                      <a
                        href={item.url}
                        className="flex w-full items-start p-4"
                      >
                        <span className="mr-2 flex h-8 w-8 flex-shrink-0 items-center overflow-hidden rounded-full bg-blue p-2 dark:bg-blue-night">
                          <Icon
                            className="!h-4 !w-4 !text-xs text-white"
                            variant="user-plus"
                          />
                        </span>
                        <div className="flex flex-wrap text-sm">
                          <span className="w-full text-primary dark:text-primary-night">
                            {item.body}
                          </span>
                          <span className="w-full text-xs text-secondary dark:text-secondary-night">
                            {parseDate(item.dateline)}
                          </span>
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}
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
