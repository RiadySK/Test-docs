import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Layout from 'components/_layout/desktop'
import { DFP_DESKTOP_HOME } from 'components/ads'
import { useBanners } from 'services/banner'

// Dynamic Import
const Ads = dynamic(() => import('components/ads'), { ssr: false })
const KaskusTvWidget = dynamic(() => import('components/widget/kaskusTv'), {
  ssr: false,
})
const HotThreadSection = dynamic(
  () => import('components/_views/desktop/home/hotThreadSection'),
  { ssr: false },
)
const CreatorSection = dynamic(() => import('components/widget/creatorSection'))

const NewCommunityWidget = dynamic(
  () => import('components/widget/community/new'),
)
const MyCommunityWidget = dynamic(
  () => import('components/widget/community/my'),
)

const ThreadrecomendationSection = dynamic(
  () => import('components/widget/threadRecommendation'),
)
// HotTopicWidget causes swiper bug when dynamic imported

const HomeDesktop: NextPage = () => {
  const { data: bannerData, isLoading: bannerIsLoading } = useBanners(
    [-10007, -20007, -6, -1],
    'top_billboard',
    0,
  )
  if (!bannerIsLoading) {
    console.log(bannerData)
  }

  return (
    <Layout>
      <Ads
        ad_unit={DFP_DESKTOP_HOME.TOWER_LEFT.ad_unit}
        placement={DFP_DESKTOP_HOME.TOWER_LEFT.placement}
        pos={DFP_DESKTOP_HOME.TOWER_LEFT.pos}
        sizes={DFP_DESKTOP_HOME.TOWER_LEFT.sizes}
        kaskus_dfp_channel={DFP_DESKTOP_HOME.TOWER_LEFT.kaskus_dfp_channel}
        className="sticky top-16 my-4"
      ></Ads>
      <main className="mx-4 flex w-970p flex-col flex-wrap justify-start">
        <Ads
          ad_unit={DFP_DESKTOP_HOME.LEADERBOARD.ad_unit}
          placement={DFP_DESKTOP_HOME.LEADERBOARD.placement}
          pos={DFP_DESKTOP_HOME.LEADERBOARD.pos}
          sizes={DFP_DESKTOP_HOME.LEADERBOARD.sizes}
          kaskus_dfp_channel={DFP_DESKTOP_HOME.LEADERBOARD.kaskus_dfp_channel}
          className="mt-4 w-full"
        ></Ads>
        <div className="mt-4 flex w-full">
          <aside className="w-60 flex-none">
            <NewCommunityWidget />
            <MyCommunityWidget className={'mt-4'} />
          </aside>
          <section className="mx-4 w-0 flex-auto">
            <HotThreadSection />
          </section>
          <aside className="w-300p flex-none">
            <KaskusTvWidget />
            <Ads
              ad_unit={DFP_DESKTOP_HOME.R1.ad_unit}
              placement={DFP_DESKTOP_HOME.R1.placement}
              pos={DFP_DESKTOP_HOME.R1.pos}
              sizes={DFP_DESKTOP_HOME.R1.sizes}
              kaskus_dfp_channel={DFP_DESKTOP_HOME.R1.kaskus_dfp_channel}
              className="mb-4"
            ></Ads>
            <ThreadrecomendationSection className="mb-4" />
            <Ads
              ad_unit={DFP_DESKTOP_HOME.R2.ad_unit}
              placement={DFP_DESKTOP_HOME.R2.placement}
              pos={DFP_DESKTOP_HOME.R2.pos}
              sizes={DFP_DESKTOP_HOME.R2.sizes}
              kaskus_dfp_channel={DFP_DESKTOP_HOME.R2.kaskus_dfp_channel}
              className="mb-4"
            ></Ads>
            <CreatorSection className="mb-4" />
            <Ads
              ad_unit={DFP_DESKTOP_HOME.R3.ad_unit}
              placement={DFP_DESKTOP_HOME.R3.placement}
              pos={DFP_DESKTOP_HOME.R3.pos}
              sizes={DFP_DESKTOP_HOME.R3.sizes}
              kaskus_dfp_channel={DFP_DESKTOP_HOME.R3.kaskus_dfp_channel}
              className="mb-4"
            ></Ads>
          </aside>
        </div>
      </main>
      <Ads
        ad_unit={DFP_DESKTOP_HOME.TOWER_RIGHT.ad_unit}
        placement={DFP_DESKTOP_HOME.TOWER_RIGHT.placement}
        pos={DFP_DESKTOP_HOME.TOWER_RIGHT.pos}
        sizes={DFP_DESKTOP_HOME.TOWER_RIGHT.sizes}
        kaskus_dfp_channel={DFP_DESKTOP_HOME.TOWER_RIGHT.kaskus_dfp_channel}
        className="sticky top-16 my-4"
      ></Ads>
    </Layout>
  )
}

export default HomeDesktop
