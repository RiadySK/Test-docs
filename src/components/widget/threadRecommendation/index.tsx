import classNames from 'classnames'
import {
  PARAMS_ROUTES,
  URL_THREAD_DETAIL,
  URL_THREAD_LIST,
} from 'constant/routes'
import { useThreadRecommendation } from 'services/thread'
import SectionHeader from 'components/common/sectionHeader'
import ThreadRecomendationSkeleton from './skeleton'

interface ThreadRecomendationSectionProps {
  className?: string
  items?: any
}

const ThreadRecomendationSection = ({
  className,
}: ThreadRecomendationSectionProps) => {
  const { data, isLoading } = useThreadRecommendation()

  if (!data?.data.length && isLoading) return <ThreadRecomendationSkeleton />

  const renderThreadRecommendationStream = () => {
    return data?.data.map((item, index) => {
      const { slug, title, id, community, thumbnail } = item
      const key = `${id}-${index}`
      const threadUrl = URL_THREAD_DETAIL.replace(PARAMS_ROUTES.ID, id).replace(
        PARAMS_ROUTES.SLUG,
        slug,
      )
      const communityUrl = URL_THREAD_LIST.replace(
        PARAMS_ROUTES.ID,
        community.id,
      )

      return (
        <div
          key={key}
          className={classNames(
            'mb-3 flex w-full border-b border-neutral pb-3 last:mb-0 last:border-none last:pb-0 dark:border-b-night-border  lg:mb-2 lg:pb-4',
            className,
          )}
        >
          <div>
            <a
              href={threadUrl}
              className="cursor-pointer text-sm font-medium text-primary dark:text-primary-night lg:text-base lg:text-secondary"
            >
              {title}
            </a>
            <a
              href={communityUrl}
              className="mt-2 hidden text-xs text-secondary dark:text-secondary-night lg:block"
            >
              {community.name}
            </a>
          </div>
          {thumbnail && (
            <a
              href={threadUrl}
              className="ml-auto hidden cursor-pointer lg:block"
            >
              <img
                className="h-14 w-14 rounded-md rounded-bl-none object-cover"
                src={thumbnail.url}
                alt="recommendation"
              />
            </a>
          )}
        </div>
      )
    })
  }

  return (
    <div
      className={classNames(
        'bg-grey-2 p-4 dark:bg-black lg:bg-white lg:dark:bg-grey-7',
        className,
      )}
    >
      <SectionHeader
        icon="thumbs-up"
        iconClassName="text-white bg-yellow"
        title="Thread Rekomendasi"
        className="mb-4"
      />
      <div className="last:border-b-0 last:border-none">
        {renderThreadRecommendationStream()}
      </div>
    </div>
  )
}
export default ThreadRecomendationSection
