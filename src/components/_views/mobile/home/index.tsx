import type { NextPage } from 'next'
import Layout from 'components/_layout/mobile/default'
import HotTopics from 'components/widget/hotTopic'
import CommunityWidget from 'components/widget/community'
import CreatorSection from 'components/widget/creatorSection'
import CommunitySection from 'components/widget/communitySection'
import HotThreadCard from 'components/card/thread'
import LoadMoreContextProvider from 'contexts/loadMore'
import { LoadingSpinner } from 'components/common/loading'
import { Thread } from 'types/thread'
import {
  CommunityChannelVariant,
  CommunityWidgetVariant,
} from 'types/community'
import { newCommunity } from 'services/_mock'
import { useCommunityChannel, useMyCommunity } from 'services/community'
import { useCreatorMock } from 'services/kreator'
import { useHotThreads } from 'services/hotThread'
import { CardDisplayType } from 'types/hotThread'
import Ads, { DFP_MOBILE_HOME } from 'components/ads'

const HomeMobile: NextPage = () => {
  const {
    data: hotThreadData,
    isLoading: hotThreadLoading,
    isValidating: hotThreadValidating,
    setSize,
    size,
  } = useHotThreads()
  const { data: communityData, isLoading: communityIsLoading } =
    useCommunityChannel('0', CommunityChannelVariant.New)
  const { data: comPopData, isLoading: comPopIsLoading } = useCommunityChannel()
  const { data: myCommunityData, isLoading: isMyCommunityLoading } =
    useMyCommunity()
  const { data: kreatorData, isLoading: kreatorIsLoading } = useCreatorMock()

  return (
    <Layout>
      <Ads
        ad_unit={DFP_MOBILE_HOME.DFP_MOBILE_HOME_LEADERBOARD.ad_unit}
        placement={DFP_MOBILE_HOME.DFP_MOBILE_HOME_LEADERBOARD.placement}
        pos={DFP_MOBILE_HOME.DFP_MOBILE_HOME_LEADERBOARD.pos}
        sizes={DFP_MOBILE_HOME.DFP_MOBILE_HOME_LEADERBOARD.sizes}
        kaskus_dfp_channel={
          DFP_MOBILE_HOME.DFP_MOBILE_HOME_LEADERBOARD.kaskus_dfp_channel
        }
        className="mt-4 w-full"
      ></Ads>
      <main className="w-full">
        <>
          {!communityIsLoading && communityData && communityData.data && (
            <CommunityWidget
              variant={newCommunity.variant}
              items={communityData.data}
            />
          )}
          {!isMyCommunityLoading && myCommunityData?.data && (
            <CommunityWidget
              items={myCommunityData.data}
              variant={CommunityWidgetVariant.MyCommunity}
              seeAllButton={true}
            />
          )}
        </>
        <Ads
          ad_unit={DFP_MOBILE_HOME.DFP_MOBILE_HOME_MIDDLE1.ad_unit}
          placement={DFP_MOBILE_HOME.DFP_MOBILE_HOME_MIDDLE1.placement}
          pos={DFP_MOBILE_HOME.DFP_MOBILE_HOME_MIDDLE1.pos}
          sizes={DFP_MOBILE_HOME.DFP_MOBILE_HOME_MIDDLE1.sizes}
          kaskus_dfp_channel={
            DFP_MOBILE_HOME.DFP_MOBILE_HOME_MIDDLE1.kaskus_dfp_channel
          }
          className="mt-4 w-full"
        ></Ads>
        {!hotThreadLoading &&
          hotThreadData?.data &&
          hotThreadData.data.map((obj: Thread, index: number) => {
            return (
              <HotThreadCard
                className="mb-4"
                key={index + Math.floor(Math.random() * 1000).toString()}
                item={obj}
                // TODO Temporary
                displayType={CardDisplayType.THUMBNAIL}
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
        {!hotThreadLoading && (
          <LoadMoreContextProvider
            className="p-2"
            onVisible={() => {
              if (!hotThreadValidating) {
                setSize(size + 1)
              }
            }}
          >
            <LoadingSpinner />
          </LoadMoreContextProvider>
        )}
        <Ads
          ad_unit={DFP_MOBILE_HOME.DFP_MOBILE_HOME_BOTTOM.ad_unit}
          placement={DFP_MOBILE_HOME.DFP_MOBILE_HOME_BOTTOM.placement}
          pos={DFP_MOBILE_HOME.DFP_MOBILE_HOME_BOTTOM.pos}
          sizes={DFP_MOBILE_HOME.DFP_MOBILE_HOME_BOTTOM.sizes}
          kaskus_dfp_channel={
            DFP_MOBILE_HOME.DFP_MOBILE_HOME_BOTTOM.kaskus_dfp_channel
          }
          className="mt-4 w-full"
        ></Ads>
      </main>
    </Layout>
  )
}

export default HomeMobile
