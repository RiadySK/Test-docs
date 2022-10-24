import classNames from 'classnames'

interface ThreadRecomendationProps {
  className?: string
  title: string
  category: string
  src: string
}

const ThreadRecomendation = ({
  title,
  category,
  src,
  className,
}: ThreadRecomendationProps) => {
  return (
    <div
      className={classNames(
        'flex w-full bg-grey-2 py-2 dark:bg-black lg:bg-white',
        className,
      )}
    >
      <div>
        <a className="cursor-pointer text-base font-medium text-primary dark:text-primary-night lg:text-sm lg:text-secondary">
          {title}
        </a>
        <div className="Mt-5 hidden text-xs text-secondary dark:text-secondary-night lg:block">
          {category}
        </div>
      </div>
      <a className="ml-auto hidden cursor-pointer lg:block">
        <img
          className="h-14 w-14 rounded-md rounded-bl-none object-cover"
          src={src}
          alt="recommendation"
        />
      </a>
    </div>
  )
}

export default ThreadRecomendation
