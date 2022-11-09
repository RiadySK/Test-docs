import classNames from 'classnames'
import Icon from '../icon'
import styles from './index.module.css'

interface Props {
  className?: string
  icon: string
  iconClassName?: string
  title: string
}

const SectionHeader = ({ className, icon, iconClassName, title }: Props) => {
  return (
    <div className={classNames(className, 'flex items-center')}>
      <div
        className={classNames(
          iconClassName,
          styles['sectionHeaderIcon'],
          'h-5 w-5 lg:h-7 lg:w-7',
        )}
      >
        <Icon
          variant={icon}
          className="h-3 w-3 !text-xs lg:h-5 lg:w-5 lg:!text-base"
        />
      </div>
      <div
        className={classNames(
          styles['sectionHeaderTitle'],
          'dark:text-primary-night',
        )}
      >
        {title}
      </div>
    </div>
  )
}

export default SectionHeader
