import { NextPage } from 'next'
import Meta, { homePage } from 'components/meta'
import ViewHomeMobile from 'components/_views/mobile/home'

const HomePageMobile: NextPage = () => {
  return (
    <>
      <Meta url="https://m.kaskus.co.id/" ldJSON={homePage} />
      <ViewHomeMobile />
    </>
  )
}

export default HomePageMobile
