import type { NextPage } from 'next'
import Layout from 'components/_layout/mobile/default'
import HotTopics from 'components/widget/hotTopic'
import CommunityWidget from 'components/widget/community'
import CreatorSection from 'components/widget/creatorSection'
import CommunitySection from 'components/widget/communitySection'
import HotThreadCard from 'components/card/thread'
import { Thread } from 'types/thread'
import { useThreadMock } from 'services/thread'
import { myCommunity, newCommunity } from 'services/_mock'
import { useCommunityMock } from 'services/community'
import { useCreatorMock } from 'services/kreator'

const HomeMobile: NextPage = () => {
  const { data, isLoading } = useThreadMock()
  const { data: communityData, isLoading: communityIsLoading } =
    useCommunityMock()
  const { data: comPopData, isLoading: comPopIsLoading } =
    useCommunityMock('?type=populer')
  const { data: kreatorData, isLoading: kreatorIsLoading } = useCreatorMock()

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
    <Layout>
      <div className="my-4 h-24 w-full bg-slate-500">ADS Leaderboard</div>
      <main className="w-full">
        {!communityIsLoading && communityData && communityData.data && (
          <>
            <CommunityWidget
              variant={newCommunity.variant}
              items={communityData.data}
            />
            <CommunityWidget
              items={communityData.data}
              variant={myCommunity.variant}
              seeAllButton={myCommunity.seeAllButton}
            />
          </>
        )}
        <div className="mx-auto h-64 w-300p bg-slate-500">ADS 300x250</div>
        {!isLoading &&
          data?.data &&
          data.data.map((obj: Thread, index: number) => {
            return (
              <HotThreadCard
                className="mb-4"
                key={index + Math.floor(Math.random() * 1000).toString()}
                item={obj}
                onClickDownvote={handleDownvoteClick}
                onClickUpvote={handleUpvoteClick}
                onClickReplyCount={handleReplyCountClick}
              />
            )
          })}
        <HotTopics />
        {!comPopIsLoading && comPopData && comPopData.data && (
          <CommunitySection title="Komunitas Populer" items={comPopData.data} />
        )}
        {!kreatorIsLoading && kreatorData && (
          <CreatorSection items={kreatorData} />
        )}
      </main>
    </Layout>
  )
}

export default HomeMobile
