import classNames from 'classnames'

import Button from 'components/common/button'
import { Community } from 'types/community'
import { formatNumberShort } from 'utils/number'
import { PARAMS_ROUTES, URL_THREAD_LIST } from 'constant/routes'

interface CommunityProps {
  item: Community
  className?: string
  button?: boolean
}

const CommunityCard = ({
  item: {
    id,
    name,
    icon,
    meta: { total_thread, total_member },
    membership_status,
  },
  className,
  button,
}: CommunityProps) => {
  const threadListUrl = URL_THREAD_LIST.replace(PARAMS_ROUTES.ID, id)

  return (
    <div
      className={classNames(
        'items-centers flex w-full justify-between ',
        className,
      )}
    >
      <div className="items-centers flex w-full justify-start border-b py-4 px-1.5 dark:border-b-night-border">
        <a href={threadListUrl}>
          <img className="mr-2 h-9 w-9 object-cover" src={icon} alt={icon} />
        </a>
        <div>
          <a
            href={threadListUrl}
            className="w-fit cursor-pointer text-sm font-bold text-primary line-clamp-2 dark:text-primary-night"
          >
            {name}
          </a>
          <div className="text-xs text-secondary dark:text-secondary-night">
            {formatNumberShort(total_thread)} Thread •{' '}
            {formatNumberShort(total_member)} Anggota
          </div>
        </div>
        {membership_status === 0 && button === true && (
          <div className="ml-auto">
            <Button type="blue-alt" onClick={() => alert('Bergabung')}>
              Gabung
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommunityCard
