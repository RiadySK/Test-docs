import classNames from 'classnames'
import Community from 'components/card/community'
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
    <div className={classNames('bg-white p-4 dark:bg-black', className)}>
      <div className="flex items-center justify-start pb-2 ">
        <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue">
          <kaskus-icon
            nopadding
            noClick
            variant="star"
            color="white"
          ></kaskus-icon>
        </div>
        <div className="font-secondary text-base font-bold text-primary dark:text-primary-night lg:text-xl">
          {title}
        </div>
        <a className="ml-auto text-sm font-bold text-blue dark:text-blue-night lg:hidden">
          Lihat Semua
        </a>
      </div>
      {items.map((item, i) => (
        <Community key={`${item.name}-${i}`} {...item} button={true} />
      ))}
      <kaskus-button
        width="100%"
        text="Buat Komunitas"
        icon="users-medical"
      ></kaskus-button>
    </div>
  )
}

export default CommunitySection
