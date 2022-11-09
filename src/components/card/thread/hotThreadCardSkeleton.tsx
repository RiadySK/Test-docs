import classNames from 'classnames'
import { CardDisplayType } from 'types/hotThread'

interface Props {
  className?: string
  displayType: CardDisplayType
}

const HotThreadCardSkeleton = ({ className, displayType }: Props) => {
  const isThumbnail = displayType === CardDisplayType.THUMBNAIL

  return (
    <div
      className={classNames(
        'mb-4 block w-full bg-white p-4 dark:bg-black lg:dark:bg-grey-7',
        className,
      )}
    >
      <div className="flex flex-wrap py-2 md:mb-1 md:pt-0">
        <div className="flex w-full">
          <div className="h-9 w-9 shrink-0 animate-pulse rounded-full bg-grey-3"></div>
          <div className="flex w-full flex-col opacity-70">
            <div className="ml-2 h-4 w-1/2 animate-pulse bg-grey-3"></div>
            <div className="ml-2 mt-1 h-4 w-3/4 animate-pulse bg-grey-3"></div>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col">
          <div className="mt-1 flex h-4 w-3/4 animate-pulse bg-grey-3"></div>
          <div className="mt-1 flex h-4 w-full animate-pulse bg-grey-3"></div>
          <div className="mt-1 flex h-4 w-1/4 animate-pulse bg-grey-3"></div>
        </div>
        {isThumbnail && (
          <div className="mt-4 flex w-full">
            <div className="mt-1 flex h-48 w-full animate-pulse rounded-md bg-grey-3"></div>
          </div>
        )}
        <div className="mt-4 flex w-full justify-between opacity-70">
          <div className="flex h-4 w-1/6 animate-pulse bg-grey-3"></div>
          <div className="flex h-4 w-1/2 animate-pulse bg-grey-3"></div>
        </div>
      </div>
    </div>
  )
}

export default HotThreadCardSkeleton
