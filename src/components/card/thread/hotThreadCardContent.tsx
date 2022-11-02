import classNames from 'classnames'
import { CardDisplayType } from 'types/hotThread'
import HotThreadCardImage from './hotThreadCardImage'
import HotThreadCardVideo from './hotThreadCardVideo'

interface Props {
  id: string
  title: string
  thumbnail: string
  description: string
  slug: string
  displayType: CardDisplayType
  cardType?: 'default' | 'live' | 'video' | 'ads' | 'textOnly'
}

export default function HotThreadCardContent({
  id,
  title,
  thumbnail,
  description,
  slug,
  displayType,
  cardType,
}: Props) {
  const url = `/thread/${id}/${slug}`

  return displayType && displayType == CardDisplayType.THUMBNAIL ? (
    <>
      <a href={url} className="mb-2 block text-lg font-medium">
        {title}
      </a>
      {cardType === 'textOnly' ? (
        <p className="text-sm text-secondary dark:text-secondary-night">
          {description}
        </p>
      ) : (
        <a
          href={url}
          className="relative block h-0 overflow-hidden rounded-md rounded-bl-none pb-thumbnail"
        >
          {cardType === 'video' ? (
            <HotThreadCardVideo
              thumbnail={thumbnail}
              title={title}
              displayType={displayType}
            />
          ) : (
            <HotThreadCardImage
              thumbnail={thumbnail}
              title={title}
              displayType={displayType}
              cardType={cardType}
            />
          )}
        </a>
      )}
    </>
  ) : (
    <div
      className={classNames(
        cardType !== 'textOnly' ? 'flex' : '',
        'text-primary dark:text-primary-night',
      )}
    >
      <a href={url} className="block flex-auto text-lg font-medium">
        {title}
      </a>
      {cardType !== 'textOnly' && (
        <a
          href={url}
          className="relative ml-2 flex h-20 w-20 flex-none items-center"
        >
          {cardType === 'video' ? (
            <HotThreadCardVideo
              thumbnail={thumbnail}
              title={title}
              displayType={displayType}
            />
          ) : (
            <HotThreadCardImage
              thumbnail={thumbnail}
              title={title}
              displayType={displayType}
              cardType={cardType}
            />
          )}
        </a>
      )}
    </div>
  )
}
