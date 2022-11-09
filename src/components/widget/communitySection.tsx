import classNames from 'classnames'
import CommunityCard from 'components/card/community'
import Button from 'components/common/button'
import SectionHeader from 'components/common/sectionHeader'
import { URL_CREATE_COMMUNITY, URL_FORUM_ALL } from 'constant/routes'
import { Community } from 'types/community'

interface CommunitySectionProps {
  className?: string
  title: string
  items: Community[]
  seeAllButton?: boolean
}

const CommunitySection = ({
  title,
  items,
  className,
  seeAllButton,
}: CommunitySectionProps) => {
  return (
    <div
      className={classNames(
        'border-y-4 border-grey-6 bg-white p-4 dark:bg-grey-7 lg:mb-4 lg:border-0',
        className,
      )}
    >
      <div className="flex items-center justify-start pb-2 ">
        <SectionHeader
          icon="users"
          iconClassName="text-white bg-blue"
          title={title}
        />
        {seeAllButton && (
          <a
            href={URL_FORUM_ALL}
            className="ml-auto text-sm font-bold text-blue dark:text-blue-night lg:hidden"
          >
            Lihat Semua
          </a>
        )}
      </div>
      {items.map((item, i) => (
        <CommunityCard key={`${item.name}-${i}`} item={item} button={true} />
      ))}
      <a href={URL_CREATE_COMMUNITY}>
        <Button type="blue" icon="users-medical" className="w-full">
          Buat Komunitas
        </Button>
      </a>
    </div>
  )
}

export default CommunitySection
