import classNames from 'classnames'

interface Props {
  className?: string
}

const CommunityWidgetSkeleton = ({ className }: Props) => {
  const listItem = [1, 2, 3, 4, 5]
  return (
    <div
      className={classNames(
        'mb-4 block w-full bg-white p-4 dark:bg-black lg:dark:bg-grey-7',
        className,
      )}
    >
      <div className="flex flex-wrap py-2 md:mb-1 md:pt-0">
        <div className="flex w-full items-center">
          <div className="h-5 w-5 shrink-0 animate-pulse rounded-full bg-grey-3 lg:h-7 lg:w-7"></div>
          <div className="flex w-full opacity-70">
            <div className="ml-2 h-6 w-10/12 animate-pulse bg-grey-3"></div>
          </div>
        </div>
        {listItem.map((item) => (
          <div
            key={item}
            className="flex w-full border-b py-4 dark:border-b-night-border"
          >
            <div className="h-9 w-9 shrink-0 animate-pulse bg-grey-3"></div>
            <div className="ml-2 flex w-full flex-col">
              <div className="flex h-4 w-full animate-pulse bg-grey-3"></div>
              <div className="mt-1 flex w-full items-center opacity-70">
                <div className="flex h-3 w-2/5 animate-pulse bg-grey-3"></div>
                <span className="mx-1 text-xs text-secondary dark:text-secondary-night">
                  •
                </span>
                <div className="flex h-3 w-2/5 animate-pulse bg-grey-3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommunityWidgetSkeleton
