import { PARAMS_ROUTES, URL_THREAD_DETAIL } from 'constant/routes'
import { CardDisplayType } from 'types/hotThread'
import HotThreadCardImage from './hotThreadCardImage'
import { Image } from 'types/image'

interface Props {
  id: string
  title: string
  thumbnail?: Image
  videoUrl?: string
  description: string
  slug: string
  displayType: CardDisplayType
  isPromoted?: boolean
}

export default function HotThreadCardContent({
  id,
  title,
  thumbnail,
  videoUrl,
  description,
  slug,
  displayType,
  isPromoted,
}: Props) {
  const url = URL_THREAD_DETAIL.replace(PARAMS_ROUTES.ID, id).replace(
    PARAMS_ROUTES.SLUG,
    slug,
  )

  const renderDescription = () => (
    <p className="text-sm text-secondary dark:text-secondary-night">
      {description}
    </p>
  )

  const renderThumbnailLarge = () => {
    if (videoUrl) {
      return (
        <>
          {isPromoted && <div className="mb-2">{renderDescription()}</div>}
          <div className="overflow-hiddenrounded-bl-none relative block h-0 pb-thumbnail">
            <iframe
              className="absolute top-0 left-0 h-full w-full"
              src={videoUrl}
              allowFullScreen
            ></iframe>
          </div>
        </>
      )
    } else if (thumbnail) {
      return (
        <>
          {isPromoted && <div className="mb-2">{renderDescription()}</div>}
          <a
            href={url}
            className="relative block h-0 overflow-hidden rounded-md rounded-bl-none pb-thumbnail"
          >
            <HotThreadCardImage
              thumbnail={thumbnail}
              title={title}
              displayType={displayType}
            />
          </a>
        </>
      )
    } else {
      return renderDescription()
    }
  }

  const renderThumbnailCompact = () => {
    if (thumbnail) {
      return (
        <a
          href={url}
          className="relative ml-2 flex h-20 w-20 flex-none items-center overflow-hidden rounded-md rounded-bl-none"
        >
          <HotThreadCardImage
            thumbnail={thumbnail}
            title={title}
            displayType={displayType}
          />
        </a>
      )
    }
  }

  return displayType && displayType == CardDisplayType.THUMBNAIL ? (
    <>
      <a href={url} className="mb-2 block text-lg font-medium">
        {title}
      </a>
      {renderThumbnailLarge()}
    </>
  ) : (
    <div className="flex text-primary dark:text-primary-night">
      <a href={url} className="block flex-auto text-lg font-medium">
        {title}
      </a>
      {renderThumbnailCompact()}
    </div>
  )
}
