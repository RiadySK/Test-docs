import { ReactNode } from 'react'
import classNames from 'classnames'
import Overlay from 'components/common/overlay'

interface ModalProps {
  children: ReactNode
  className?: string
  onClose: () => void
}

const Modal = ({ children, className, onClose }: ModalProps) => {
  if (!children) return null

  return (
    <>
      <div
        className={classNames(
          'fixed top-1/2 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 shadow-md',
          className,
        )}
      >
        <span
          className="absolute -top-4 -right-4 z-10 hidden cursor-pointer rounded-full bg-white p-2 hover:bg-grey-1 dark:bg-grey-7 dark:hover:bg-grey-8 lg:block"
          onClick={onClose}
        >
          <kaskus-icon variant="times" size="small" noPadding noClick />
        </span>
        <div className="relative">{children}</div>
      </div>
      <Overlay onClick={onClose} zIndex={49} />
    </>
  )
}

export default Modal
