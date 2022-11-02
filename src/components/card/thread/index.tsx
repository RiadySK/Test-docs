import classNames from 'classnames'

import { CardDisplayType } from 'types/hotThread'
import { Thread } from 'types/thread'
import HotThreadCardHeader from './hotThreadCardHeader'
import HotThreadCardContent from './hotThreadCardContent'
import HotThreadCardFooter from './hotThreadCardFooter'
import Button from 'components/common/button'

interface Props {
  item: Thread
  className?: string
  displayType: CardDisplayType
  cardType?: 'default' | 'live' | 'video' | 'ads' | 'textOnly'
}

const HotThreadCard = ({ item, className, displayType, cardType }: Props) => {
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

  return (
    <div
      className={classNames(
        'w-full bg-white p-4 dark:bg-black lg:dark:bg-grey-7',
        className,
      )}
    >
      <HotThreadCardHeader
        communityIcon={item.community.icon}
        communityName={item.community.name}
        displayName={item.post.user.display_name}
        dateline={item.post.dateline}
        membershipStatus={item.community.membership_status}
        cardType={cardType}
      />
      <HotThreadCardContent
        id={item.id}
        title={item.title}
        thumbnail={item.thumbnail.url}
        description={item.description}
        slug={item.slug}
        displayType={displayType}
        cardType={cardType}
      />
      {cardType === 'ads' ? (
        <Button type="blue-alt" className="mt-2 w-full">
          Lihat Selengkapnya
        </Button>
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
