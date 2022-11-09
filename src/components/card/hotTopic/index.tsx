import classNames from 'classnames'

import Image from 'components/common/image'
import { PARAMS_ROUTES, URL_HOT_TOPIC } from 'constant/routes'

import styles from './index.module.css'
import HotTopicCardSkeleton from './skeleton'

interface Props {
  url: string
  slug: string
  thumbnail: string
  isLoading?: boolean
  className?: string
}

const HotTopicCard = ({
  className,
  slug,
  thumbnail,
  url,
  isLoading,
}: Props) => {
  return isLoading ? (
    <HotTopicCardSkeleton className={styles['hotTopicCardFrame']} />
  ) : (
    <a
      href={url}
      className={classNames(className, styles['hotTopicCardFrame'])}
    >
      <Image src={thumbnail} alt={slug} width={120} height={160} />
    </a>
  )
}

export default HotTopicCard
