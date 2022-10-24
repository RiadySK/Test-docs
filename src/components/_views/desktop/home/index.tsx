import type { NextPage } from 'next'
import Layout from '../../../_layout/desktop'
import HotThreadCard from '../../../card/thread'
import { myCommunity, newCommunity } from '../../../../services/_mock'
import HotTopics from '../../../widget/hotTopic'
import CommunityWidget from '../../../widget/community'
import CommunitySection from '../../../widget/communitySection'
import CreatorSection from '../../../widget/creatorSection'
import { useThreadMock } from '../../../../services/thread'
import { Thread } from '../../../../types/thread'
import { useCommunityMock } from '../../../../services/community'
import { useCreatorMock } from '../../../../services/kreator'

const HomeDesktop: NextPage = () => {
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
      {/* <div className="grid w-full grid-flow-dense grid-cols-3 gap-4">
        <div className="col-span-3 bg-gray-200 text-black">ADS Leaderboard</div>
        <div className="w-60 bg-gray-200 text-black">ADS Tower 1</div>
        <div className="bg-gray-200 text-black">main</div>
        <div className="w-60 bg-gray-200 text-black">ADS Tower 2</div>
      </div>
       */}
      <div className="my-4 w-32 bg-slate-500">ADS Tower 1</div>
      <main className="mx-4 flex w-970p flex-col flex-wrap justify-start">
        <div className="my-4 h-64 w-full bg-slate-500">ADS Leaderboard</div>
        <div className="flex w-full">
          <aside className="w-60 flex-none">
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
                  className={'mt-4'}
                />
              </>
            )}
          </aside>
          <section className="mx-4 w-0 flex-auto">
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
              <CommunitySection
                title="Komunitas Populer"
                items={comPopData.data}
              />
            )}
          </section>
          <aside className="w-300p flex-none">
            <div className="h-64 w-300p bg-slate-500">ADS 300x250</div>
            {!kreatorIsLoading && kreatorData && (
              <CreatorSection items={kreatorData} className="my-4" />
            )}
          </aside>
        </div>
      </main>
      <div className="my-4 w-32 bg-slate-500">ADS Tower 2</div>
    </Layout>
  )
}

export default HomeDesktop
