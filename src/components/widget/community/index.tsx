import classNames from 'classnames'

import { Community, CommunityWidgetVariant } from 'types/community'
import CommunityCard from 'components/card/community'
import styles from './index.module.css'
import SectionHeader from 'components/common/sectionHeader'

interface CommunityWidgetProps {
  className?: string
  variant: CommunityWidgetVariant
  items: Community[]
  seeAllButton?: boolean
}

const CommunityWidget = ({
  variant,
  items,
  seeAllButton,
  className,
}: CommunityWidgetProps) => {
  return (
    <div
      className={classNames(
        'bg-white p-4 dark:bg-black lg:dark:bg-grey-7',
        className,
      )}
    >
      <div className="flex items-center justify-start">
        {variant == CommunityWidgetVariant.MyCommunity ? (
          <SectionHeader
            icon="users"
            iconClassName="text-white"
            title="Komunitas Saya"
            className="bg-yellow"
          />
        ) : (
          <SectionHeader
            icon="star"
            iconClassName="text-white"
            title="Komunitas Baru"
            className="bg-blue"
          />
        )}
      </div>
      {items.map((item, i) => (
        <CommunityCard key={`${item.slug}-${i}`} item={item} />
      ))}
      {seeAllButton && (
        <div className="pt-4 text-center">
          <a className="ml-auto cursor-pointer text-sm font-bold text-blue dark:text-blue-night">
            Lihat Semua
          </a>
        </div>
      )}
    </div>
  )
}

export default CommunityWidget
