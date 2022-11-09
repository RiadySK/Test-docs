// OBSOLETE, CAN BE DELETED
import classNames from 'classnames'
import {
  PARAMS_ROUTES,
  URL_THREAD_DETAIL,
  URL_THREAD_LIST,
} from 'constant/routes'

import { Image } from 'types/image'

interface ThreadRecomendationProps {
  className?: string
  threadId: string
  threadSlug: string
  title: string
  communityId: string
  communityName: string
  image?: Image
}

const ThreadRecomendation = ({
  threadId,
  threadSlug,
  title,
  communityId,
  communityName,
  image,
  className,
}: ThreadRecomendationProps) => {
  const threadUrl = URL_THREAD_DETAIL.replace(
    PARAMS_ROUTES.ID,
    threadId,
  ).replace(PARAMS_ROUTES.SLUG, threadSlug)
  const communityUrl = URL_THREAD_LIST.replace(PARAMS_ROUTES.ID, communityId)

  return (
    <div
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
          <div>{title}</div>
        </a>
        <a
          href={communityUrl}
          className="mt-2 hidden text-xs text-secondary dark:text-secondary-night lg:block"
        >
          {communityName}
        </a>
      </div>
      {image && (
        <a href={threadUrl} className="ml-auto hidden cursor-pointer lg:block">
          <img
            className="h-14 w-14 rounded-md rounded-bl-none object-cover"
            src={image.url}
            alt="recommendation"
          />
        </a>
      )}
    </div>
  )
}

export default ThreadRecomendation
