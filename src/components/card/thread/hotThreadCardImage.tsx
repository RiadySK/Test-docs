import classNames from 'classnames'
import { CardDisplayType } from 'types/hotThread'

interface Props {
  thumbnail: string
  title: string
  displayType: CardDisplayType
  cardType?: 'default' | 'live' | 'video' | 'ads' | 'textOnly'
}

const HotThreadCardImage = ({
  thumbnail,
  title,
  displayType,
  cardType,
}: Props) => {
  return (
    <>
      <img
        src={thumbnail}
        className={classNames(
          displayType == CardDisplayType.COMPACT
            ? 'h-full w-full rounded-md rounded-bl-none'
            : 'absolute h-full w-full rounded-md rounded-bl-none object-cover',
        )}
        alt={title}
      />
      {cardType === 'live' && (
        <span className="absolute top-2 left-2 w-14 rounded-3 bg-red px-1 py-0.5 text-center text-base font-medium text-white dark:bg-red-night">
          • LIVE
        </span>
      )}
    </>
  )
}

export default HotThreadCardImage
