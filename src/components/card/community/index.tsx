import classNames from 'classnames'

import Button from 'components/common/button'
import { Community } from 'types/community'
import { formatNumberShort } from 'utils/number'

interface CommunityProps {
  item: Community
  className?: string
  button?: boolean
}

const CommunityCard = ({
  item: {
    name,
    icon,
    meta: { total_thread, total_member },
    membership_status,
  },
  className,
  button,
}: CommunityProps) => {
  return (
    <div
      className={classNames(
        'items-centers flex w-full justify-between ',
        className,
      )}
    >
      <div className="items-centers flex w-full justify-start border-b py-4 px-1.5 dark:border-b-night-border">
        <img className="mr-2 h-9 w-9 object-cover" src={icon} alt={icon} />
        <div>
          <a className="w-fit cursor-pointer text-sm font-bold text-primary line-clamp-2 dark:text-primary-night">
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
