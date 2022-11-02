import Icon from 'components/common/icon'
import { CardDisplayType } from 'types/hotThread'

interface Props {
  thumbnail: string
  title: string
  displayType: CardDisplayType
}

const HotThreadCardVideo = ({ thumbnail, title, displayType }: Props) => {
  return displayType && displayType == CardDisplayType.THUMBNAIL ? (
    <iframe
      className="absolute top-0 left-0 h-full w-full"
      src="https://tv.kaskus.co.id/api/embed/video/jhgzc"
      allowFullScreen
      data-video="jhgzc"
    ></iframe>
  ) : (
    <div className="relative">
      <img
        src={thumbnail}
        className={'h-full w-full rounded-md rounded-bl-none'}
        alt={title}
      />
      <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-grey-8 bg-opacity-50 text-white">
        <Icon variant="play" />
      </div>
    </div>
  )
}

export default HotThreadCardVideo
