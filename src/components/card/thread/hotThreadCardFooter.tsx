import { formatNumberShort } from 'utils/number'

interface Props {
  vote: number
  views: number
  replies: number
  onClickUpvote: VoidFunction
  onClickDownvote: VoidFunction
  onClickReplyCount: VoidFunction
}

export default function HotThreadCardFooter({
  vote,
  views,
  replies,
  onClickUpvote,
  onClickDownvote,
  onClickReplyCount,
}: Props) {
  return (
    <div className="flex justify-between pt-3 text-secondary dark:text-secondary-night">
      <div className="flex items-center">
        <div className="mr-2" onClick={onClickUpvote}>
          <kaskus-icon
            nopadding
            size="small"
            variant="arrow-alt-up"
          ></kaskus-icon>
        </div>
        <div className="text-sm">{vote}</div>
        <div className="ml-2" onClick={onClickDownvote}>
          <kaskus-icon
            nopadding
            size="small"
            variant="arrow-alt-down"
          ></kaskus-icon>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4 flex items-center">
          <kaskus-icon nopadding size="small" variant="eye"></kaskus-icon>
          <div className="ml-2 text-xs">{formatNumberShort(views)}</div>
        </div>
        <div className="mr-4 flex items-center" onClick={onClickReplyCount}>
          <kaskus-icon nopadding size="small" variant="reply"></kaskus-icon>
          <div className="ml-2 text-xs">{formatNumberShort(replies)}</div>
        </div>
        <div>
          <kaskus-icon nopadding size="small" variant="share-alt"></kaskus-icon>
        </div>
      </div>
    </div>
  )
}
