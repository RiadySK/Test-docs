import classNames from 'classnames'
import { CardDisplayType } from 'types/hotThread'
import { Image as ImageType } from 'types/image'
import ThreadImage from 'components/common/image/threadImage'

interface Props {
  thumbnail: ImageType
  title: string
  displayType: CardDisplayType
}

const HotThreadCardImage = ({ thumbnail, title, displayType }: Props) => {
  const isCompact = displayType == CardDisplayType.COMPACT

  return (
    <>
      <ThreadImage
        width={isCompact ? 180 : 368}
        height={isCompact ? 180 : 190}
        src={thumbnail.url}
        className={classNames(
          isCompact ? 'aspect-square' : 'aspect-video',
          'object-cover',
        )}
        alt={title}
        isCensored={thumbnail.is_censored}
        displayType={displayType}
      />
    </>
  )
}

export default HotThreadCardImage
