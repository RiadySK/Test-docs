import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { newCommunity } from 'services/_mock'
import { useCommunityChannel, useMyCommunity } from 'services/community'
import { useCreatorMock } from 'services/kreator'
import {
  CommunityChannelVariant,
  CommunityWidgetVariant,
} from 'types/community'
import Layout from 'components/_layout/desktop'
import { DFP_HOME } from 'components/ads'
import HotTopicWidget from 'components/widget/hotTopic'

// Dynamic Import
const Ads = dynamic(() => import('components/ads'), { ssr: false })
const HotThreadSection = dynamic(
  () => import('components/widget/hotThreadSection'),
  { ssr: false },
)
const CreatorSection = dynamic(() => import('components/widget/creatorSection'))
const CommunitySection = dynamic(
  () => import('components/widget/communitySection'),
)
const CommunityWidget = dynamic(() => import('components/widget/community'))
// HotTopicWidget causes swiper bug when dynamic imported

const HomeDesktop: NextPage = () => {
  const { data: communityData, isLoading: communityIsLoading } =
    useCommunityChannel('0', CommunityChannelVariant.New)
  const { data: myCommunityData, isLoading: isMyCommunityLoading } =
    useMyCommunity()
  const { data: kreatorData, isLoading: kreatorIsLoading } = useCreatorMock()
  const { data: comPopData, isLoading: comPopIsLoading } = useCommunityChannel()

  return (
    <Layout>
      <Ads
        ad_unit={DFP_HOME.DFP_DESKTOP_HOME_TOWER_LEFT.ad_unit}
        placement={DFP_HOME.DFP_DESKTOP_HOME_TOWER_LEFT.placement}
        pos={DFP_HOME.DFP_DESKTOP_HOME_TOWER_LEFT.pos}
        sizes={DFP_HOME.DFP_DESKTOP_HOME_TOWER_LEFT.sizes}
        kaskus_dfp_channel={
          DFP_HOME.DFP_DESKTOP_HOME_TOWER_LEFT.kaskus_dfp_channel
        }
        className="sticky top-16 my-4"
      ></Ads>
      <main className="mx-4 flex w-970p flex-col flex-wrap justify-start">
        <Ads
          ad_unit={DFP_HOME.DFP_DESKTOP_HOME_LEADERBOARD.ad_unit}
          placement={DFP_HOME.DFP_DESKTOP_HOME_LEADERBOARD.placement}
          pos={DFP_HOME.DFP_DESKTOP_HOME_LEADERBOARD.pos}
          sizes={DFP_HOME.DFP_DESKTOP_HOME_LEADERBOARD.sizes}
          kaskus_dfp_channel={
            DFP_HOME.DFP_DESKTOP_HOME_LEADERBOARD.kaskus_dfp_channel
          }
          className="mt-4 w-full"
        ></Ads>
        <div className="mt-4 flex w-full">
          <aside className="w-60 flex-none">
            <>
              {!communityIsLoading && communityData?.data && (
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
                  className={'mt-4'}
                />
              )}
            </>
          </aside>
          <section className="mx-4 w-0 flex-auto">
            <HotThreadSection
              HotTopicsComponent={<HotTopicWidget key={"hot-topic-home-desktop"} />}
              CommunitySectionComponent={
                !comPopIsLoading &&
                comPopData?.data && (
                  <CommunitySection
                    title="Komunitas Populer"
                    items={comPopData.data}
                    key={"komunitas-populer-home-desktop"}
                  />
                )
              }
            />
          </section>
          <aside className="w-300p flex-none">
            <Ads
              ad_unit={DFP_HOME.DFP_DESKTOP_HOME_R1.ad_unit}
              placement={DFP_HOME.DFP_DESKTOP_HOME_R1.placement}
              pos={DFP_HOME.DFP_DESKTOP_HOME_R1.pos}
              sizes={DFP_HOME.DFP_DESKTOP_HOME_R1.sizes}
              kaskus_dfp_channel={
                DFP_HOME.DFP_DESKTOP_HOME_R1.kaskus_dfp_channel
              }
              className="mb-4"
            ></Ads>
            {!kreatorIsLoading && kreatorData && (
              <CreatorSection items={kreatorData} className="mb-4" />
            )}
            <Ads
              ad_unit={DFP_HOME.DFP_DESKTOP_HOME_R2.ad_unit}
              placement={DFP_HOME.DFP_DESKTOP_HOME_R2.placement}
              pos={DFP_HOME.DFP_DESKTOP_HOME_R2.pos}
              sizes={DFP_HOME.DFP_DESKTOP_HOME_R2.sizes}
              kaskus_dfp_channel={
                DFP_HOME.DFP_DESKTOP_HOME_R2.kaskus_dfp_channel
              }
              className="mb-4"
            ></Ads>
            <Ads
              ad_unit={DFP_HOME.DFP_DESKTOP_HOME_R3.ad_unit}
              placement={DFP_HOME.DFP_DESKTOP_HOME_R3.placement}
              pos={DFP_HOME.DFP_DESKTOP_HOME_R3.pos}
              sizes={DFP_HOME.DFP_DESKTOP_HOME_R3.sizes}
              kaskus_dfp_channel={
                DFP_HOME.DFP_DESKTOP_HOME_R3.kaskus_dfp_channel
              }
              className="mb-4"
            ></Ads>
          </aside>
        </div>
      </main>
      <Ads
        ad_unit={DFP_HOME.DFP_DESKTOP_HOME_TOWER_RIGHT.ad_unit}
        placement={DFP_HOME.DFP_DESKTOP_HOME_TOWER_RIGHT.placement}
        pos={DFP_HOME.DFP_DESKTOP_HOME_TOWER_RIGHT.pos}
        sizes={DFP_HOME.DFP_DESKTOP_HOME_TOWER_RIGHT.sizes}
        kaskus_dfp_channel={
          DFP_HOME.DFP_DESKTOP_HOME_TOWER_RIGHT.kaskus_dfp_channel
        }
        className="sticky top-16 my-4"
      ></Ads>
    </Layout>
  )
}

export default HomeDesktop
