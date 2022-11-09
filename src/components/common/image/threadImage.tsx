import classNames from 'classnames'
import { CardDisplayType } from 'types/hotThread'
import Icon from '../icon'
import Image from './index'

interface Props {
  width?: number
  height?: number
  alt: string
  src: string
  isCensored: boolean
  displayType: CardDisplayType
  className?: string
}

const ThreadImage = ({
  width,
  height,
  alt,
  src,
  isCensored,
  displayType,
  className,
}: Props) => {
  return (
    <>
      {isCensored && (
        <div
          className={classNames(
            'absolute z-10 flex h-full w-full flex-col items-center justify-center bg-grey-5 bg-opacity-50',
          )}
        >
          <Icon variant={'eye-slash'} className="text-lg" />
          {displayType === CardDisplayType.THUMBNAIL && (
            <span className="mt-1 text-center text-sm text-white">
              Gambar Sensitif
            </span>
          )}
        </div>
      )}

      <Image
        className={classNames(isCensored && 'blur-lg', className)}
        width={width}
        height={height}
        alt={alt}
        src={src}
      ></Image>
    </>
  )
}

export default ThreadImage
