import classNames from 'classnames'
import { ReactNode } from 'react'

import styles from './index.module.css'

interface Props {
  className?: string
  variant: string
  type?: 'solid' | 'outline' | 'regular'
  children?: ReactNode
  onClick?: () => void
}

const Icon = ({
  className,
  variant,
  type = 'regular',
  children,
  onClick,
}: Props) => {
  const iconClassName = className ? className : 'text-base p-2'

  return (
    <i
      className={classNames(
        styles['icon'],
        `fas fa-${variant}`,
        styles[type],
        iconClassName,
      )}
      onClick={onClick}
    >
      {children}
    </i>
  )
}

export default Icon
