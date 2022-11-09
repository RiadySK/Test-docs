import { ReactNode, BaseSyntheticEvent } from 'react'
import classNames from 'classnames'
interface Props {
  children: ReactNode
  className?: string
}

const Toast = ({ className, children }: Props) => {
  return (
    <div
      className={classNames(
        'fixed bottom-20 left-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 rounded-sm border border-solid border-grey-8 bg-grey-7 p-4 text-sm text-white',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Toast
