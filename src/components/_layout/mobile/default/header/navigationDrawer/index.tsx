import classNames from 'classnames'
import { ReactElement, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { useBodyTheme } from 'contexts/theme'
import Toggle from 'components/common/toggle'
import Overlay from 'components/common/overlay'
import styles from './index.module.css'

interface NavigationDrawerProps {
  className?: string
}

const NavigationDrawer = ({
  className,
}: NavigationDrawerProps): ReactElement => {
  const { setTheme } = useTheme()
  const { isNight } = useBodyTheme()
  const [isShowDrawer, setShowDrawer] = useState<boolean>(false)
  const [isShowProducts, setShowProducts] = useState<boolean>(true)
  const [isShowChannels, setShowChannels] = useState<boolean>(true)
  const [isShowSettings, setShowSettings] = useState<boolean>(true)

  useEffect(() => {
    isShowDrawer
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden')
  }, [isShowDrawer])

  return (
    <>
      <span
        className=""
        onClick={() => {
          setShowDrawer(!isShowDrawer)
        }}
      >
        <kaskus-icon
          size="medium"
          variant={isShowDrawer ? 'times' : 'bars'}
          noClick
          noPadding
        ></kaskus-icon>
      </span>

      <div
        className={classNames(
          styles['navigationDrawer'],
          isShowDrawer && styles['active'],
          className,
        )}
      >
        <div className="flex w-full flex-wrap bg-white dark:bg-grey-8 dark:text-white">
          <div className={classNames(styles['navigationDrawer-menu'])}>
            <div className={classNames(styles['navigationDrawer-menu-item'])}>
              <div
                className="flex w-full items-center justify-between"
                onClick={() => setShowProducts(!isShowProducts)}
              >
                <strong className="font-medium">KASKUS Product</strong>
                <span className="p-1">
                  <kaskus-icon
                    variant={isShowProducts ? 'chevron-up' : 'chevron-down'}
                    size="small"
                    noPadding
                    noClick
                  ></kaskus-icon>
                </span>
              </div>
              <ul
                className={classNames(
                  'mt-2 w-full',
                  isShowProducts ? 'block' : 'hidden',
                )}
              >
                <li>
                  <a className="py-2" href="/forum/all">
                    <div className="">Forum</div>
                  </a>
                </li>
                <li>
                  <a className="py-2" href="/forum/all">
                    <div className="">Forum</div>
                  </a>
                </li>
                <li>
                  <a className="py-2" href="/forum/all">
                    <div className="">Forum</div>
                  </a>
                </li>
              </ul>
            </div>
            <div className={classNames(styles['navigationDrawer-menu-item'])}>
              <div
                className="flex w-full items-center justify-between"
                onClick={() => setShowChannels(!isShowChannels)}
              >
                <strong className="font-medium">KASKUS Channel</strong>
                <span className="p-1">
                  <kaskus-icon
                    variant={isShowChannels ? 'chevron-up' : 'chevron-down'}
                    size="small"
                    noPadding
                    noClick
                  ></kaskus-icon>
                </span>
              </div>
              <ul
                className={classNames(
                  'mt-2 w-full',
                  isShowChannels ? 'block' : 'hidden',
                )}
              >
                <li>
                  <a className="py-2" href="/forum/all">
                    <div className="">Komintas</div>
                  </a>
                </li>
                <li>
                  <a className="py-2" href="/forum/all">
                    <div className="">Forum</div>
                  </a>
                </li>
                <li>
                  <a className="py-2" href="/forum/all">
                    <div className="">Forum</div>
                  </a>
                </li>
              </ul>
            </div>
            <div className={classNames(styles['navigationDrawer-menu-item'])}>
              <div
                className="flex w-full items-center justify-between"
                onClick={() => setShowSettings(!isShowSettings)}
              >
                <strong className="font-medium">Pengaturan Global</strong>
                <span className="p-1">
                  <kaskus-icon
                    variant={isShowSettings ? 'chevron-up' : 'chevron-down'}
                    size="small"
                    noPadding
                    noClick
                  ></kaskus-icon>
                </span>
              </div>
              <ul
                className={classNames(
                  'mt-2 w-full',
                  isShowSettings ? 'block' : 'hidden',
                )}
              >
                <li>
                  <div className="flex w-full items-center justify-between py-2">
                    <div className="flex">
                      <kaskus-icon variant="eye" noClick noPadding />
                      <span className="ml-2">Spoiler</span>
                    </div>
                    <span
                      className="p-1"
                      onClick={() => setTheme(isNight ? 'light' : 'dark')}
                    >
                      <kaskus-toggle></kaskus-toggle>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex w-full items-center justify-between py-2">
                    <div className="flex">
                      <kaskus-icon variant="image" noClick noPadding />
                      <span className="ml-2">Gambar</span>
                    </div>

                    <span
                      className="p-1"
                      onClick={() => setTheme(isNight ? 'light' : 'dark')}
                    >
                      <kaskus-toggle></kaskus-toggle>
                    </span>
                  </div>
                </li>
                <li onClick={() => setTheme(isNight ? 'light' : 'dark')}>
                  <div className="flex w-full items-center justify-between py-2">
                    <div className="flex">
                      <kaskus-icon variant="moon" noClick noPadding />
                      <span className="ml-2">Mode Malam</span>
                    </div>
                    <span className="p-1">
                      {/* <kaskus-toggle
                    checked={isNight}
                    onchange={() => setTheme(isNight ? 'light' : 'dark')}
                  ></kaskus-toggle> */}
                      {/* <Toggle
                    checked={isNight}
                    onChange={(value) => setTheme(isNight ? 'light' : 'dark')}
                  /> */}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className={classNames(styles['navigationDrawer-menu-item'])}>
              <ul className={classNames('mt-2 w-full')}>
                <li>
                  <a className="py-2" href="/forum/all">
                    <div className="">Versi Desktop</div>
                  </a>
                </li>
                <li>
                  <a className="py-2" href="/forum/all">
                    <div className="">Hubungi Kami</div>
                  </a>
                </li>
                <li>
                  <a className="py-2" href="/forum/all">
                    <div className="">Pusat Bantuan</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isShowDrawer && (
        <Overlay onClick={() => setShowDrawer(false)} zIndex={50} />
      )}
    </>
  )
}

export default NavigationDrawer
