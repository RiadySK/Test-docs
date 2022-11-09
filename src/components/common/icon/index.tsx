import classNames from 'classnames'
import { ReactNode } from 'react'

import styles from './index.module.css'

interface Props {
  type?: 'solid' | 'outline' | 'regular'
  variant: string
  children?: ReactNode
  className?: string
  // add '!' prefix for text-*, h-*, and w-* moddifiers. ex: !text-sm, !w-4, and !h-4.
  onClick?: () => void
}

const Icon = ({
  type = 'regular',
  variant,
  children,
  className,
  onClick,
}: Props) => {
  return (
    <i
      className={classNames(
        'h-5 w-5 text-base',
        `fas fa-${variant}`,
        styles['icon'],
        styles[type],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </i>
  )
}

export default Icon
