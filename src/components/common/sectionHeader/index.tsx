import classNames from 'classnames'
import Icon from '../icon'
import styles from './index.module.css'

interface Props {
  className: string
  icon: string
  iconClassName: string
  title: string
}

const SectionHeader = ({ className, icon, iconClassName, title }: Props) => {
  return (
    <div className="flex items-center">
      <div
        className={classNames(
          className,
          styles['sectionHeaderIcon'],
          'h-5 w-5 lg:h-7 lg:w-7',
        )}
      >
        <Icon className={iconClassName} variant={icon} />
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
