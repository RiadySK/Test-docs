import Icon from 'components/common/icon'
import Share from 'components/common/share'
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
        <div className="mr-2 cursor-pointer" onClick={onClickUpvote}>
          <Icon className="text-sm lg:text-base" variant="arrow-alt-up" />
        </div>
        <div className="text-sm">{vote}</div>
        <div className="ml-2 cursor-pointer" onClick={onClickDownvote}>
          <Icon className="text-sm lg:text-base" variant="arrow-alt-down" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4 flex items-center">
          <Icon className="text-sm lg:text-base" variant="eye" />
          <div className="ml-2 text-xs">{formatNumberShort(views)}</div>
        </div>
        <div
          className="mr-2 flex cursor-pointer items-center"
          onClick={onClickReplyCount}
        >
          <Icon className="text-sm lg:text-base" variant="reply" />
          <div className="ml-2 text-xs">{formatNumberShort(replies)}</div>
        </div>
        <Share url="" title="" description="" direction="left" />
      </div>
    </div>
  )
}
