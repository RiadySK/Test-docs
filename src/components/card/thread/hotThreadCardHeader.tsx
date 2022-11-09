import classNames from 'classnames'

import {
  PARAMS_ROUTES,
  URL_THREAD_LIST,
  URL_USER_PROFILE,
} from 'constant/routes'
import { parseDate } from 'utils/date'

interface Props {
  className?: string
  communityId: number
  communityName: string
  communityIcon: string
  userId: number
  displayName: string
  dateline: number
  membershipStatus: number
  promotedUsername?: string
  promotedEntitlement?: string
  threadId?: string
  onClickJoinCommunity?: VoidFunction
}

export default function HotThreadCardHeader({
  className,
  communityId,
  communityName,
  communityIcon,
  userId,
  displayName,
  dateline,
  membershipStatus,
  promotedUsername,
  promotedEntitlement,
  onClickJoinCommunity,
}: Props) {
  const threadListUrl = URL_THREAD_LIST.replace(
    PARAMS_ROUTES.ID,
    communityId.toString(),
  )

  const profileUrl = URL_USER_PROFILE.replace(
    PARAMS_ROUTES.ID,
    userId.toString(),
  )

  const isPromoted = !!promotedUsername

  return (
    <div className={classNames('flex py-2 md:mb-1 md:pt-0', className)}>
      <div className="flex items-center">
        <img src={communityIcon} className="h-9 w-9" alt={communityName} />
      </div>
      <div className="ml-2 flex-auto text-sm">
        <div className="flex font-bold">
          <a
            className="text-primary dark:text-primary-night"
            href={threadListUrl}
          >
            {communityName}
          </a>
          {isPromoted ? (
            <a
              className="ml-2 text-blue dark:text-blue-night"
              href={threadListUrl}
            >
              Detail
            </a>
          ) : (
            membershipStatus === 0 && (
              <div
                className="ml-2 cursor-pointer text-blue dark:text-blue-night"
                onClick={onClickJoinCommunity}
              >
                Gabung
              </div>
            )
          )}
        </div>
        <div className="flex text-xs md:text-sm">
          {isPromoted ? (
            <div className="text-secondary dark:text-secondary-night">
              {promotedUsername}
            </div>
          ) : (
            <a
              href={profileUrl}
              className="text-secondary dark:text-secondary-night"
            >
              {displayName}
            </a>
          )}
          <div className="ml-1 text-primary dark:text-primary-night">•</div>
          <div className="ml-1 text-tertiary dark:text-tertiary-night">
            {isPromoted
              ? promotedEntitlement || 'Sponsored'
              : parseDate(dateline)}
          </div>
        </div>
      </div>
    </div>
  )
}
