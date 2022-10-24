import classNames from 'classnames'
import ThreadRecomendation from './threadRecomendation'

interface ThreadrecomendationSectionProps {
  className?: string
  items: Array<{
    src: string
    title: string
    category: string
  }>
}

const ThreadrecomendationSection = ({
  items,
  className,
}: ThreadrecomendationSectionProps) => {
  return (
    <div
      className={classNames(
        'bg-grey-2 p-4 dark:bg-black lg:bg-white',
        className,
      )}
    >
      <div className="flex items-center justify-start pb-2">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue dark:bg-yellow">
          <kaskus-icon
            noPadding
            noClick
            variant="thumbs-up"
            size="small"
            color="white"
          ></kaskus-icon>
        </div>
        <div className="pl-2 font-secondary text-base font-bold text-primary dark:text-primary-night lg:text-xl">
          Thread Recomendation
        </div>
      </div>
      <div className="last:border-b-0 last:border-none">
        {items.map((item, i) => (
          <ThreadRecomendation
            key={`${item.title}-${i}`}
            src={item.src}
            title={item.title}
            category={item.category}
            className={
              i + 1 === items.length
                ? ''
                : 'border-b border-neutral dark:border-b-night-border'
            }
          />
        ))}
      </div>
    </div>
  )
}
export default ThreadrecomendationSection
