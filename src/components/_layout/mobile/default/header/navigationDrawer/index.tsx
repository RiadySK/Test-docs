import classNames from 'classnames'
import { ReactElement, useState } from 'react'
import { useTheme } from 'next-themes'

import { useBodyTheme } from 'contexts/theme'
import Toggle from 'components/common/toggle'
import Overlay from 'components/common/overlay'
import styles from './index.module.css'
import Icon from 'components/common/icon'

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
  const [isShowImage, setShowImage] = useState<boolean>(true)
  const [isShowSpoiler, setShowSpoiler] = useState<boolean>(true)

  return (
    <>
      <span
        className=""
        onClick={() => {
          setShowDrawer(!isShowDrawer)
        }}
      >
        <Icon className="h-4 w-4" variant={isShowDrawer ? 'times' : 'bars'} />
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
            <div className={classNames(styles['navigationDrawer-menuItem'])}>
              <div
                className="flex w-full items-center justify-between"
                onClick={() => setShowProducts(!isShowProducts)}
              >
                <strong className="font-medium">KASKUS Product</strong>
                <span className="p-1">
                  <Icon
                    className="h-4 w-4"
                    variant={isShowProducts ? 'chevron-up' : 'chevron-down'}
                  />
                </span>
              </div>
              <ul
                className={classNames(
                  'mt-2 flex w-full flex-wrap',
                  isShowProducts ? 'block' : 'hidden',
                )}
              >
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="https://tv.kaskus.co.id/?utm_source=kaskus-forum&utm_medium=header"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/assets/wap_1.0/images/icon-forum.svg)',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Forum
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="https://tv.kaskus.co.id/?utm_source=kaskus-forum&utm_medium=header"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/images/premium_tab/premium_tab_fbyy4g59kdu2.png)',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      TV
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a className="flex w-full items-center py-4" href="/fjb">
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/assets/wap_1.0/images/icon-forum.svg)',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Jual Beli
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className={classNames(styles['navigationDrawer-menuItem'])}>
              <div
                className="flex w-full items-center justify-between"
                onClick={() => setShowChannels(!isShowChannels)}
              >
                <strong className="font-medium">KASKUS Channel</strong>
                <span className="p-1">
                  <Icon
                    className="h-4 w-4"
                    variant={isShowChannels ? 'chevron-up' : 'chevron-down'}
                  />
                </span>
              </div>
              <ul
                className={classNames(
                  'mt-2 flex w-full flex-wrap',
                  isShowChannels ? 'block' : 'hidden',
                )}
              >
                <li className="flex w-1/2">
                  <a className="flex w-full items-center py-4" href="/home">
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/assets/wap_1.0/images/icon-home.svg)',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Home
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="/channel/foryou"
                  >
                    <Icon className="mr-4 h-5 w-5 text-red" variant="heart" />
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      For You
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="/channel/1/story"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/r30x30/img/tagicon/channel_20180807025923.png)',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Story
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="/channel/2/hobby"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/r30x30/img/tagicon/channel_20180807025933.png)',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Hobby
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="/channel/3/games"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/r30x30/img/tagicon/channel_20180807030003.png)',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Games
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="/channel/4/entertainment"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/r30x30/img/tagicon/channel_20180807030013.png',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Entertainment
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="/channel/10/female"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/r30x30/img/tagicon/channel_20180807030451.png',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Female
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="/channel/6/tech"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/r30x30/img/tagicon/channel_20180807030208.png',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Tech
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="/channel/7/automotive"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/r30x30/img/tagicon/channel_20180807030316.png',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Automotive
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="/channel/8/sports"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/r30x30/img/tagicon/channel_20180807030350.png',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Sports
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="/channel/9/food--travel"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/r30x30/img/tagicon/channel_20180807030425.png',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Food &amp; Travel
                    </div>
                  </a>
                </li>
                <li className="flex w-1/2">
                  <a
                    className="flex w-full items-center py-4"
                    href="/channel/5/news"
                  >
                    <div
                      className="mr-4 h-5 w-5 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(https://s.kaskus.id/r30x30/img/tagicon/channel_20180807030045.png',
                      }}
                    ></div>
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      News
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className={classNames(styles['navigationDrawer-menuItem'])}>
              <div
                className="flex w-full items-center justify-between"
                onClick={() => setShowSettings(!isShowSettings)}
              >
                <strong className="font-medium">Pengaturan Global</strong>
                <span className="p-1">
                  <Icon
                    className="h-4 w-4"
                    variant={isShowSettings ? 'chevron-up' : 'chevron-down'}
                  />
                </span>
              </div>
              <ul
                className={classNames(
                  'mt-2 w-full',
                  isShowSettings ? 'block' : 'hidden',
                )}
              >
                <li className="flex w-full">
                  <div className="flex w-full items-center justify-between py-2">
                    <div className="flex">
                      <Icon variant="eye" className="mr-4 h-4 w-4" />
                      <span className="text-sm text-grey-8 dark:text-grey-2">
                        Spoiler
                      </span>
                    </div>
                    <span
                      className="p-1"
                      onClick={() => setTheme(isNight ? 'light' : 'dark')}
                    >
                      <Toggle
                        checked={isShowSpoiler}
                        onChange={(checked) => {
                          setShowSpoiler(checked)
                        }}
                      />
                    </span>
                  </div>
                </li>
                <li className="flex w-full">
                  <div className="flex w-full items-center justify-between py-2">
                    <div className="flex">
                      <Icon variant="image" className="mr-4 h-4 w-4" />
                      <span className="text-sm text-grey-8 dark:text-grey-2">
                        Gambar
                      </span>
                    </div>

                    <span
                      className="p-1"
                      onClick={() => setTheme(isNight ? 'light' : 'dark')}
                    >
                      <Toggle
                        checked={isShowImage}
                        onChange={(checked) => {
                          setShowImage(checked)
                        }}
                      />
                    </span>
                  </div>
                </li>
                <li className="flex w-full">
                  <div className="flex w-full items-center justify-between py-2">
                    <div className="flex">
                      <Icon variant="moon" className="mr-4 h-4 w-4" />
                      <span className="text-sm text-grey-8 dark:text-grey-2">
                        Mode Malam
                      </span>
                    </div>
                    <span className="p-1">
                      <Toggle
                        checked={isNight}
                        onChange={() => {
                          setTheme(isNight ? 'light' : 'dark')
                        }}
                      />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className={classNames(styles['navigationDrawer-menuItem'])}>
              <ul className={classNames('mt-2 w-full')}>
                <li className="flex w-full">
                  <a className="py-2" href="/forum/all">
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Versi Desktop
                    </div>
                  </a>
                </li>
                <li className="flex w-full">
                  <a className="py-2" href="/forum/all">
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Hubungi Kami
                    </div>
                  </a>
                </li>
                <li className="flex w-full">
                  <a className="py-2" href="/forum/all">
                    <div className="text-sm text-grey-8 dark:text-grey-2">
                      Pusat Bantuan
                    </div>
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
