import classNames from 'classnames'

import { parseDate } from 'utils/date'

interface Props {
  className?: string
  communityName: string
  communityIcon: string
  displayName: string
  dateline: number
  membershipStatus: number
  cardType?: 'default' | 'live' | 'video' | 'ads' | 'textOnly'
}

export default function HotThreadCardHeader({
  className,
  communityName,
  communityIcon,
  displayName,
  dateline,
  membershipStatus,
  cardType,
}: Props) {
  return (
    <div className={classNames('flex py-2 md:mb-1 md:pt-0', className)}>
      <div className="flex items-center">
        <img src={communityIcon} className="h-9 w-9" alt={communityName} />
      </div>
      <div className="ml-2 flex-auto text-sm">
        <div className="flex font-bold">
          <a className="text-primary dark:text-primary-night" href="#">
            {communityName}
          </a>
          {cardType === 'ads' ? (
            <a className="ml-2 text-blue dark:text-blue-night" href="#">
              Detail
            </a>
          ) : (
            membershipStatus === 0 && (
              <a className="ml-2 text-blue dark:text-blue-night" href="#">
                Gabung
              </a>
            )
          )}
        </div>
        <div className="flex text-xs md:text-sm">
          <a href="#" className="text-secondary dark:text-secondary-night">
            {displayName}
          </a>
          <div className="ml-1 text-primary dark:text-primary-night">•</div>
          <div className="ml-1 text-tertiary dark:text-tertiary-night">
            {cardType === 'ads' ? 'Spotlight' : parseDate(dateline)}
          </div>
        </div>
      </div>
    </div>
  )
}
