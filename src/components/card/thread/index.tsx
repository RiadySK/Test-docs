import classNames from 'classnames'

import { Thread } from 'types/thread'
import HotThreadCardHeader from './hotThreadCardHeader'
import HotThreadCardContent from './hotThreadCardContent'
import HotThreadCardFooter from './hotThreadCardFooter'

interface Props {
  item: Thread
  className?: string
  onClickUpvote: VoidFunction
  onClickDownvote: VoidFunction
  onClickReplyCount: VoidFunction
}

const HotThreadCard = ({
  item,
  className,
  onClickUpvote,
  onClickDownvote,
  onClickReplyCount,
}: Props) => {
  return (
    <div className={classNames('w-full bg-white p-4 dark:bg-black', className)}>
      <HotThreadCardHeader
        communityIcon={item.community.icon}
        communityName={item.community.name}
        displayName={item.first_post.user.display_name}
        dateline={item.first_post.dateline}
        membershipStatus={item.community.membership_status}
      />
      <HotThreadCardContent title={item.title} thumbnail={item.thumbnail.url} />
      <HotThreadCardFooter
        vote={item.meta.rating}
        views={item.meta.total_views}
        replies={item.meta.reply_count}
        onClickUpvote={onClickUpvote}
        onClickDownvote={onClickDownvote}
        onClickReplyCount={onClickReplyCount}
      />
    </div>
  )
}

export default HotThreadCard
