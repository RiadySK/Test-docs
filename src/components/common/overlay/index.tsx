import classNames from 'classnames'
import styles from './index.module.css'

interface OverlayProps {
  zIndex?: number
  className?: string
  onClick: () => void
}

const Overlay = ({ className, zIndex = 0, onClick }: OverlayProps) => {
  return (
    <div
      style={{ zIndex }}
      className={classNames(styles['overlay'], className)}
      onClick={onClick}
    ></div>
  )
}

export default Overlay
