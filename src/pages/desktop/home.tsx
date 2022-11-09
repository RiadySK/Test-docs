import { NextPage } from 'next'
import Meta, { homePage } from 'components/meta'
import ViewHomeDesktop from 'components/_views/desktop/home'

const HomePageDesktop: NextPage = () => {
  return (
    <>
      <Meta url="https://www.kaskus.co.id/" ldJSON={homePage} />
      <ViewHomeDesktop />
    </>
  )
}

export default HomePageDesktop
