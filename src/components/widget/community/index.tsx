import classNames from 'classnames'

import { Community, CommunityWidgetVariant } from 'types/community'
import CommunityCard from 'components/card/community'
import styles from './index.module.css'

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
    <div className={classNames('bg-white p-4 dark:bg-black', className)}>
      <div className="flex items-center justify-start">
        {variant == CommunityWidgetVariant.MyCommunity ? (
          <>
            <div
              className={classNames(
                styles['communityWidgetIcon'],
                'h-5 w-5 bg-yellow lg:h-7 lg:w-7',
              )}
            >
              <kaskus-icon
                nopadding
                noClick
                variant="users"
                color="white"
              ></kaskus-icon>
            </div>
            <div
              className={classNames(
                styles['communityWidgetTitle'],
                'dark:text-primary-night',
              )}
            >
              Komunitas Saya
            </div>
          </>
        ) : (
          <>
            <div
              className={classNames(
                styles['communityWidgetIcon'],
                'h-5 w-5 bg-blue lg:h-7 lg:w-7',
              )}
            >
              <kaskus-icon
                nopadding
                noClick
                variant="star"
                color="white"
              ></kaskus-icon>
            </div>
            <div
              className={classNames(
                styles['communityWidgetTitle'],
                'dark:text-primary-night',
              )}
            >
              komunitas Baru
            </div>
          </>
        )}
      </div>
      {items.map((item, i) => (
        <CommunityCard key={`${item.slug}-${i}`} {...item} />
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
