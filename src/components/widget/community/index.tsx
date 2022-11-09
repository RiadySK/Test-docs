// OBSOLETE, CAN BE DELETED
import classNames from 'classnames'

import { Community, CommunityWidgetVariant } from 'types/community'
import CommunityCard from 'components/card/community'
import styles from './index.module.css'
import SectionHeader from 'components/common/sectionHeader'
import { URL_FORUM_ALL, URL_MY_COMMUNITY } from 'constant/routes'

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
        'border-y-4 border-grey-6 bg-white p-4 dark:bg-grey-7 lg:border-0',
        className,
      )}
    >
      <div className="flex items-center justify-start">
        {variant == CommunityWidgetVariant.MyCommunity ? (
          <SectionHeader
            icon="users"
            iconClassName="text-white bg-yellow"
            title="Komunitas Saya"
          />
        ) : (
          <SectionHeader
            icon="star"
            iconClassName="text-white bg-blue"
            title="Komunitas Baru"
          />
        )}
      </div>
      {items.map((item, i) => (
        <CommunityCard key={`${item.slug}-${i}`} item={item} />
      ))}
      {seeAllButton && (
        <div className="pt-4 text-center">
          <a
            href={
              variant == CommunityWidgetVariant.MyCommunity
                ? URL_MY_COMMUNITY
                : URL_FORUM_ALL
            }
            className="ml-auto cursor-pointer text-sm font-bold text-blue dark:text-blue-night"
          >
            Lihat Semua
          </a>
        </div>
      )}
    </div>
  )
}

export default CommunityWidget
