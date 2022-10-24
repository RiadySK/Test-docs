import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import ChannelBarCommunities from './communities'
import styles from './index.module.css'

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
                href="/channel/foryou"
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
                href="/chanp-2nel/1/story"
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
                href="/chanp-2nel/2/hobby"
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
                href="/channel/3/games"
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
                href="/channel/4/entertainment"
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
                href="/channel/10/female"
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
                href="/channel/6/tech"
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
                href="/channel/7/automotive"
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
                href="/channel/8/sports"
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
                href="/channel/9/food--travel"
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
                href="/channel/5/news"
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
