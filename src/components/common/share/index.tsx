import classNames from 'classnames'
import { ReactElement, ReactNode, useRef, useState } from 'react'
import Icon from '../icon'
import styles from './index.module.css'

interface Props {
  url: string
  title: string
  description: string
  direction?: 'right' | 'left' | 'up' | 'down'
  className?: string
  onClickFacebook?: () => void
  onClickMessenger?: () => void
  onClickWhatsapp?: () => void
  onClickTwitter?: () => void
  onClickEmail?: () => void
  onClickLink?: () => void
}

const Share = ({
  url,
  title,
  description,
  direction = 'left',
  className,
  onClickFacebook,
  onClickMessenger,
  onClickWhatsapp,
  onClickTwitter,
  onClickEmail,
  onClickLink,
}: Props): ReactElement => {
  const sharerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    e.stopPropagation()
    const withinBoundaries = e
      .composedPath()
      .includes(sharerRef.current as EventTarget)

    if (!withinBoundaries) {
      setIsActive(false)
      window.removeEventListener('mousedown', (e) => handleClickOutside(e))
    }
  }

  const handleShare = () => {
    if (window && navigator.share) {
      /* only works served via https. */
      navigator.share({
        title: title || document.title,
        text: description || window.location.href,
        url: url || window.location.href,
      })
    } else {
      setIsActive(!isActive)
      window.addEventListener('mousedown', (e) => handleClickOutside(e))
    }
  }

  const renderShareIcon = (children?: ReactNode): ReactNode => {
    return (
      <Icon
        variant={isActive ? 'times' : 'share-alt'}
        className={classNames(
          ' h-4 w-4 cursor-pointer p-2 text-sm hover:bg-grey-2 dark:hover:bg-grey-8 lg:text-base',
          styles['sharer-icon'],
        )}
        onClick={() => handleShare()}
      >
        {children}
      </Icon>
    )
  }

  const renderShareItems = (): ReactNode => {
    const isRestrictedCloseByDirection =
      isActive && direction !== 'down' && direction !== 'up'

    return (
      <>
        {isActive && (
          <div
            className={classNames(
              'absolute z-50 flex overflow-hidden rounded-sm bg-white shadow-md dark:bg-grey-7',
              styles['sharer-container'],
              styles[direction],
            )}
          >
            {isRestrictedCloseByDirection && renderShareIcon()}
            <ul className="flex max-w-max list-none p-0">
              <li className={styles['share-item']}>
                <Icon
                  variant="facebook"
                  className="pointer-events-none h-4 w-4 text-sm lg:text-base"
                />
                {!isRestrictedCloseByDirection && (
                  <span className="ml-2 font-primary text-sm font-normal">
                    facebook
                  </span>
                )}
              </li>
              <li className={styles['share-item']}>
                <Icon
                  variant="facebook-messenger"
                  className="pointer-events-none h-4 w-4 text-sm lg:text-base"
                />
                {!isRestrictedCloseByDirection && (
                  <span className="ml-2 font-primary text-sm font-normal">
                    messenger
                  </span>
                )}
              </li>
              <li className={styles['share-item']}>
                <Icon
                  variant="whatsapp"
                  className="pointer-events-none h-4 w-4 text-sm lg:text-base"
                />
                {!isRestrictedCloseByDirection && (
                  <span className="ml-2 font-primary text-sm font-normal">
                    whatsapp
                  </span>
                )}
              </li>
              <li className={styles['share-item']}>
                <Icon
                  variant="twitter"
                  className="pointer-events-none h-4 w-4 text-sm lg:text-base"
                />
                {!isRestrictedCloseByDirection && (
                  <span className="ml-2 font-primary text-sm font-normal">
                    twitter
                  </span>
                )}
              </li>
              <li className={styles['share-item']}>
                <Icon
                  variant="envelope"
                  className="pointer-events-none h-4 w-4 text-sm lg:text-base"
                />
                {!isRestrictedCloseByDirection && (
                  <span className="ml-2 font-primary text-sm font-normal">
                    email
                  </span>
                )}
              </li>
              <li className={styles['share-item']}>
                <Icon
                  variant="link"
                  className="pointer-events-none h-4 w-4 text-sm lg:text-base"
                />
                {!isRestrictedCloseByDirection && (
                  <span className="ml-2 font-primary text-sm font-normal">
                    copy link
                  </span>
                )}
              </li>
            </ul>
          </div>
        )}
      </>
    )
  }

  return (
    <div ref={sharerRef} className={classNames('relative', className)}>
      {renderShareIcon(renderShareItems())}
    </div>
  )
}

export default Share
