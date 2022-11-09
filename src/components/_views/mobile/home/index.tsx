import type { NextPage } from 'next'

import Layout from 'components/_layout/mobile/default'

const HotThreadSection = dynamic(
  () => import('components/_views/mobile/home/hotThreadSection'),
  { ssr: false },
)

import Ads, { DFP_MOBILE_HOME } from 'components/ads'
import dynamic from 'next/dynamic'

const HomeMobile: NextPage = () => {
  return (
    <Layout>
      <Ads
        ad_unit={DFP_MOBILE_HOME.LEADERBOARD.ad_unit}
        placement={DFP_MOBILE_HOME.LEADERBOARD.placement}
        pos={DFP_MOBILE_HOME.LEADERBOARD.pos}
        sizes={DFP_MOBILE_HOME.LEADERBOARD.sizes}
        kaskus_dfp_channel={DFP_MOBILE_HOME.LEADERBOARD.kaskus_dfp_channel}
        className="mt-4 w-full text-center"
      ></Ads>
      <main className="w-full">
        <Ads
          ad_unit={DFP_MOBILE_HOME.MIDDLE1.ad_unit}
          placement={DFP_MOBILE_HOME.MIDDLE1.placement}
          pos={DFP_MOBILE_HOME.MIDDLE1.pos}
          sizes={DFP_MOBILE_HOME.MIDDLE1.sizes}
          kaskus_dfp_channel={DFP_MOBILE_HOME.MIDDLE1.kaskus_dfp_channel}
          className="mt-4 w-full text-center"
        ></Ads>
        <HotThreadSection />

        <Ads
          ad_unit={DFP_MOBILE_HOME.BOTTOM.ad_unit}
          placement={DFP_MOBILE_HOME.BOTTOM.placement}
          pos={DFP_MOBILE_HOME.BOTTOM.pos}
          sizes={DFP_MOBILE_HOME.BOTTOM.sizes}
          kaskus_dfp_channel={DFP_MOBILE_HOME.BOTTOM.kaskus_dfp_channel}
          className="mt-4 w-full text-center"
        ></Ads>
      </main>
    </Layout>
  )
}

export default HomeMobile
