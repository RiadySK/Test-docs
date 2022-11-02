import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

import ChannelBarCommunities from './communities'
import styles from './index.module.css'
import { URL_CHANNEL_LANDING, PARAMS_ROUTES } from 'constant/routes'

const ChannelBar = () => {
  const channelBarRef = useRef(null)
  const [isStucked, setIsStucked] = useState<boolean>(false)

  useEffect(() => {
    let prevScrollpos = window.pageYOffset

    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset
      const isOffside = prevScrollpos > currentScrollPos

      setIsStucked(isOffside)
      prevScrollpos = currentScrollPos
    }
  }, [])

  return (
    <div
      ref={channelBarRef}
      className={classNames(
        styles['channelBar'],
        isStucked && styles['stucked'],
        'bg-white dark:bg-grey-7',
      )}
    >
      <div className={styles['channelBar-container']}>
        <ChannelBarCommunities />
        <div className="mx-4 flex h-6 w-px flex-shrink-0 bg-grey-2 dark:bg-grey-5"></div>
        <nav className="no-scrollbar w-full flex-grow-0 overflow-y-hidden">
          <ul className="flex max-w-fit items-center whitespace-nowrap">
            <li className="mr-1 inline-block uppercase lg:mr-2">
              <a
                className={classNames(styles['channel-link'], 'dark:bg-white')}
                style={
                  { '--channel-accent-color': '#0082c6' } as React.CSSProperties
                }
                href={URL_CHANNEL_LANDING.replace(PARAMS_ROUTES.ID, 'foryou')}
              >
                FOR YOU
              </a>
            </li>
            <li className="mr-1 inline-block uppercase lg:mr-2">
              <a
                className={classNames(styles['channel-link'], 'dark:bg-white')}
                style={
                  { '--channel-accent-color': '#6d899f' } as React.CSSProperties
                }
                href={URL_CHANNEL_LANDING.replace(PARAMS_ROUTES.ID, '1')}
              >
                Story
              </a>
            </li>
            <li className="mr-1 inline-block uppercase lg:mr-2">
              <a
                className={classNames(styles['channel-link'], 'dark:bg-white')}
                style={
                  { '--channel-accent-color': '#f6927a' } as React.CSSProperties
                }
                href={URL_CHANNEL_LANDING.replace(PARAMS_ROUTES.ID, '2')}
              >
                Hobby
              </a>
            </li>
            <li className="mr-1 inline-block uppercase lg:mr-2">
              <a
                className={classNames(styles['channel-link'], 'dark:bg-white')}
                style={
                  { '--channel-accent-color': '#8b3d88' } as React.CSSProperties
                }
                href={URL_CHANNEL_LANDING.replace(PARAMS_ROUTES.ID, '3')}
              >
                Games
              </a>
            </li>
            <li className="mr-1 inline-block uppercase lg:mr-2">
              <a
                className={classNames(styles['channel-link'], 'dark:bg-white')}
                style={
                  { '--channel-accent-color': '#e3ac51' } as React.CSSProperties
                }
                href={URL_CHANNEL_LANDING.replace(PARAMS_ROUTES.ID, '4')}
              >
                Entertainment
              </a>
            </li>
            <li className="mr-1 inline-block uppercase lg:mr-2">
              <a
                className={classNames(styles['channel-link'], 'dark:bg-white')}
                style={
                  { '--channel-accent-color': '#ed84a5' } as React.CSSProperties
                }
                href={URL_CHANNEL_LANDING.replace(PARAMS_ROUTES.ID, '10')}
              >
                Female
              </a>
            </li>
            <li className="mr-1 inline-block uppercase lg:mr-2">
              <a
                className={classNames(styles['channel-link'], 'dark:bg-white')}
                style={
                  { '--channel-accent-color': '#4666af' } as React.CSSProperties
                }
                href={URL_CHANNEL_LANDING.replace(PARAMS_ROUTES.ID, '6')}
              >
                Tech
              </a>
            </li>
            <li className="mr-1 inline-block uppercase lg:mr-2">
              <a
                className={classNames(styles['channel-link'], 'dark:bg-white')}
                style={
                  { '--channel-accent-color': '#5a5a5a' } as React.CSSProperties
                }
                href={URL_CHANNEL_LANDING.replace(PARAMS_ROUTES.ID, '7')}
              >
                Automotive
              </a>
            </li>
            <li className="mr-1 inline-block uppercase lg:mr-2">
              <a
                className={classNames(styles['channel-link'], 'dark:bg-white')}
                style={
                  { '--channel-accent-color': '#ce6c47' } as React.CSSProperties
                }
                href={URL_CHANNEL_LANDING.replace(PARAMS_ROUTES.ID, '8')}
              >
                Sports
              </a>
            </li>
            <li className="mr-1 inline-block uppercase lg:mr-2">
              <a
                className={classNames(styles['channel-link'], 'dark:bg-white')}
                style={
                  { '--channel-accent-color': '#51ae5e' } as React.CSSProperties
                }
                href={URL_CHANNEL_LANDING.replace(PARAMS_ROUTES.ID, '9')}
              >
                Food &amp; Travel
              </a>
            </li>
            <li className="pr-4 uppercase">
              <a
                className={classNames(styles['channel-link'], 'dark:bg-white')}
                style={
                  { '--channel-accent-color': '#dc404e' } as React.CSSProperties
                }
                href={URL_CHANNEL_LANDING.replace(PARAMS_ROUTES.ID, '5')}
              >
                News
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default ChannelBar
