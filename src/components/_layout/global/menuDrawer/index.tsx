import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import styles from './index.module.css'

interface HeaderMenuDrawerProps {
  isShow: boolean
  children: ReactNode
  className?: string
}

const HeaderMenuDrawer = ({
  isShow,
  children,
  className,
}: HeaderMenuDrawerProps): ReactElement => {
  return (
    <>
      <div
        className={classNames(
          styles['headerMenuDrawer'],
          isShow && styles['active'],
          'bg-white text-grey-7 dark:bg-grey-7 dark:text-grey-1',
          className,
        )}
      >
        {children}
      </div>
    </>
  )
}

export default HeaderMenuDrawer
