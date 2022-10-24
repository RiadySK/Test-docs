import classNames from 'classnames'
import styles from './index.module.css'
interface Props {
  className?: string
  slug: string
  thumbnail: string
}

const HotTopicCard = ({ className, slug, thumbnail }: Props) => {
  const url = `/topic/${slug}`
  return (
    <a
      href={url}
      className={classNames(className, styles['hotTopicCardFrame'])}
    >
      <img src={thumbnail} alt={slug} />
    </a>
  )
}

export default HotTopicCard
