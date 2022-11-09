import classNames from 'classnames'

import { CardDisplayType, HotThread } from 'types/hotThread'
import HotThreadCardHeader from './hotThreadCardHeader'
import HotThreadCardContent from './hotThreadCardContent'
import HotThreadCardFooter from './hotThreadCardFooter'
import Button from 'components/common/button'
import { PARAMS_ROUTES, URL_THREAD_DETAIL } from 'constant/routes'

interface Props {
  item: HotThread
  displayType: CardDisplayType
  isLoading?: boolean
  className?: string
}

const HotThreadCard = ({ item, displayType, className }: Props) => {
  // this is mock handler
  const handleUpvoteClick = () => {
    alert('Upvote clicked')
  }

  const handleDownvoteClick = () => {
    alert('Downvote clicked')
  }

  const handleReplyCountClick = () => {
    alert('Reply count clicked')
  }

  const handleJoinCommunity = () => {
    alert('Join community clicked')
  }

  return (
    <div
      className={classNames('w-full bg-white p-4 dark:bg-grey-7', className)}
    >
      <HotThreadCardHeader
        communityId={item.community.id}
        communityIcon={item.community.icon}
        communityName={item.community.name}
        userId={item.post.user.userid}
        displayName={item.post.user.display_name}
        dateline={item.post.dateline}
        membershipStatus={item.community.membership_status}
        promotedUsername={
          item.hot_thread_content.promotion_data?.promoted_username
        }
        promotedEntitlement={
          item.hot_thread_content.promotion_data?.entitlement
        }
        onClickJoinCommunity={handleJoinCommunity}
      />
      <HotThreadCardContent
        id={item.id}
        title={item.title}
        thumbnail={item.thumbnail}
        description={item.hot_thread_content.description}
        videoUrl={item.hot_thread_content.url}
        slug={item.slug}
        displayType={displayType}
        isPromoted={!!item.hot_thread_content.promotion_data}
      />
      {item.hot_thread_content.promotion_data?.cta_button ? (
        <a
          href={URL_THREAD_DETAIL.replace(PARAMS_ROUTES.ID, item.id).replace(
            PARAMS_ROUTES.SLUG,
            item.slug,
          )}
        >
          <Button type="blue-alt" className="mt-2 w-full">
            {item.hot_thread_content.promotion_data.cta_button}
          </Button>
        </a>
      ) : (
        <HotThreadCardFooter
          vote={item.meta.rating}
          views={item.meta.total_views}
          replies={item.meta.reply_count}
          onClickDownvote={handleDownvoteClick}
          onClickUpvote={handleUpvoteClick}
          onClickReplyCount={handleReplyCountClick}
        />
      )}
    </div>
  )
}

export default HotThreadCard
