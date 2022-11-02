import { FC, ReactElement } from 'react'
import classNames from 'classnames'

interface Props {
  className?: string
}
const LoadingGif: FC<Props> = ({ className }: Props): ReactElement => {
  return (
    <img
      src="https://s.kaskus.id/assets/web_1.0/images/icon-load-biru.gif"
      width={40}
      height={40}
      alt="loading-kaskus"
      className={classNames('m-auto block h-10 w-10', className)}
    />
  )
}

export default LoadingGif
