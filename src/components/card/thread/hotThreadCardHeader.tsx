import { parseDate } from 'utils/date'

interface Props {
  communityName: string
  communityIcon: string
  displayName: string
  dateline: number
  membershipStatus: number
}

export default function HotThreadCardHeader({
  communityName,
  communityIcon,
  displayName,
  dateline,
  membershipStatus,
}: Props) {
  return (
    <div className="flex pt-2 pb-2 md:mr-2">
      <div className="flex items-center">
        <img src={communityIcon} className="h-9 w-9" alt={communityName} />
      </div>
      <div className="ml-2 flex-auto text-sm">
        <div className="flex font-bold">
          <a className="text-primary dark:text-primary-night" href="#">
            {communityName}
          </a>
          {membershipStatus === 0 && (
            <a className="ml-2 text-blue dark:text-blue-night" href="#">
              Gabung
            </a>
          )}
        </div>
        <div className="flex text-xs md:text-sm">
          <a href="#" className="text-secondary dark:text-secondary-night">
            {displayName}
          </a>
          <div className="ml-1 text-primary dark:text-primary-night">•</div>
          <div className="ml-1 text-tertiary dark:text-tertiary-night">
            {parseDate(dateline)}
          </div>
        </div>
      </div>
    </div>
  )
}
