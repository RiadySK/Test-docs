import classNames from 'classnames'
import CommunityCard from 'components/card/community'
import Button from 'components/common/button'
import SectionHeader from 'components/common/sectionHeader'
import { Community as CommunityType } from '../../types/community'

interface CommunitySectionProps {
  className?: string
  title: string
  items: CommunityType[]
}

const CommunitySection = ({
  title,
  items,
  className,
}: CommunitySectionProps) => {
  return (
    <div
      className={classNames(
        'mb-4 bg-white p-4 dark:bg-black lg:dark:bg-grey-7',
        className,
      )}
    >
      <div className="flex items-center justify-start pb-2 ">
        <SectionHeader
          icon="star"
          iconClassName="text-white"
          title={title}
          className="bg-blue"
        />
        <a className="ml-auto text-sm font-bold text-blue dark:text-blue-night lg:hidden">
          Lihat Semua
        </a>
      </div>
      {items.map((item, i) => (
        <CommunityCard key={`${item.name}-${i}`} item={item} button={true} />
      ))}
      <Button type="blue" icon="users-medical" className="w-full">
        Buat Komunitas
      </Button>
    </div>
  )
}

export default CommunitySection
