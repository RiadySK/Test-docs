import classNames from 'classnames'

interface Props {
  className?: string
}

const KaskusTvWidgetSkeleton = ({ className }: Props) => {
  return (
    <div
      className={classNames(
        'mb-4 block w-full bg-white p-4 dark:bg-black lg:dark:bg-grey-7',
        className,
      )}
    >
      <div className="flex flex-wrap py-2 md:mb-1 md:pt-0">
        <div className="flex w-full opacity-70">
          <div className="mx-auto h-6 w-3/4 animate-pulse bg-grey-3"></div>
        </div>
        <div className="mt-2 h-36 w-full animate-pulse bg-grey-3"></div>
        <div className="mt-2 flex w-full flex-wrap opacity-70">
          <div className="flex h-3 w-3/4 animate-pulse bg-grey-3"></div>
          <div className="mt-1 flex h-3 w-full animate-pulse bg-grey-3"></div>
          <div className="mt-1 flex h-3 w-1/2 animate-pulse bg-grey-3"></div>
        </div>
      </div>
    </div>
  )
}

export default KaskusTvWidgetSkeleton
