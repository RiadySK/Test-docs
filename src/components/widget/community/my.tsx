import classNames from 'classnames'

import { URL_MY_COMMUNITY } from 'constant/routes'
import { useMyCommunity } from 'services/community'
import CommunityCard from 'components/card/community'
import SectionHeader from 'components/common/sectionHeader'
import CommunityWidgetSkeleton from './skeleton'

interface MyCommunityWidgetProps {
  className?: string
}

const MyCommunityWidget = ({ className }: MyCommunityWidgetProps) => {
  const { data, isLoading } = useMyCommunity()

  if (!data?.data.length && isLoading) {
    return <CommunityWidgetSkeleton className={className} />
  }

  return (
    <div
      className={classNames(
        'border-y-4 border-grey-6 bg-white p-4 dark:bg-grey-7 lg:border-0',
        className,
      )}
    >
      <div className="flex items-center justify-start">
        <SectionHeader
          icon="users"
          iconClassName="text-white bg-yellow"
          title="Komunitas Saya"
        />
      </div>
      {data?.data.map((item, i) => (
        <CommunityCard key={`${item.slug}-${i}`} item={item} />
      ))}

      <div className="pt-4 text-center">
        <a
          href={URL_MY_COMMUNITY}
          className="ml-auto cursor-pointer text-sm font-bold text-blue dark:text-blue-night"
        >
          Lihat Semua
        </a>
      </div>
    </div>
  )
}

export default MyCommunityWidget
