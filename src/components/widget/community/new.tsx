import classNames from 'classnames'

import { useCommunityChannel } from 'services/community'
import { CommunityChannelVariant } from 'types/community'
import SectionHeader from 'components/common/sectionHeader'
import CommunityCard from 'components/card/community'
import CommunityWidgetSkeleton from './skeleton'

interface NewCommunityWidgetProps {
  className?: string
}

const NewCommunityWidget = ({ className }: NewCommunityWidgetProps) => {
  const { data, isLoading } = useCommunityChannel(
    '0',
    CommunityChannelVariant.New,
  )

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
          icon="star"
          iconClassName="text-white bg-blue"
          title="Komunitas Baru"
        />
      </div>
      {data?.data.map((item, i) => (
        <CommunityCard key={`${item.slug}-${i}`} item={item} />
      ))}
    </div>
  )
}

export default NewCommunityWidget
