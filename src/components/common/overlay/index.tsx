import classNames from 'classnames'
import { useEffect } from 'react'

import styles from './index.module.css'

interface OverlayProps {
  zIndex?: number
  className?: string
  onClick: () => void
}

const Overlay = ({ className, zIndex = 0, onClick }: OverlayProps) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  return (
    <div
      style={{ zIndex }}
      className={classNames(styles['overlay'], className)}
      onClick={onClick}
    ></div>
  )
}

export default Overlay
