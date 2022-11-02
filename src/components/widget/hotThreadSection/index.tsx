import { ReactNode, useEffect, useState } from 'react'

import HotThreadCard from 'components/card/thread'
import SectionHeader from 'components/common/sectionHeader'
import SwitchThumbnail from 'components/common/switchThumbnail'
import { LoadingGif } from 'components/common/loading'

import { CardDisplayType } from 'types/hotThread'
import LoadMoreContextProvider from 'contexts/loadMore'
import {
  getLocalStorageCardDisplay,
  setLocalStorageCardDisplay,
} from 'utils/localstorage'
import { useHotThreadsLanding } from 'services/hotThread'

interface Props {
  HotTopicsComponent: ReactNode
  CommunitySectionComponent?: ReactNode
}

const HotThreadSection = ({
  HotTopicsComponent,
  CommunitySectionComponent,
}: Props) => {
  const { data, isLoading } = useHotThreadsLanding()

  const localStorageDisplayType = getLocalStorageCardDisplay()
  const [isThumbnail, setThumbnail] = useState<boolean>(
    localStorageDisplayType
      ? localStorageDisplayType === CardDisplayType.THUMBNAIL
      : true,
  )
  const displayType = isThumbnail
    ? CardDisplayType.THUMBNAIL
    : CardDisplayType.COMPACT
  const cardTypes = ['default', 'live', 'video', 'ads', 'textOnly'] as const

  useEffect(() => {
    if (displayType == localStorageDisplayType) return
    setLocalStorageCardDisplay(displayType)
  }, [displayType])
  const hotThreadStream: (ReactNode | JSX.Element)[] = []

  data?.data.forEach((card, index) => {
    const key = `${card.id} + ${index}`
    const template = (
      <HotThreadCard
        className="mb-4"
        item={card}
        key={key}
        cardType={cardTypes[Math.floor(Math.random() * cardTypes.length)]}
        displayType={
          isThumbnail ? CardDisplayType.THUMBNAIL : CardDisplayType.COMPACT
        }
      />
    )
    switch (index) {
      case 5:
        hotThreadStream.push(HotTopicsComponent)
        break

      case 11:
        hotThreadStream.push(CommunitySectionComponent)
        break
      default:
        break
    }
    hotThreadStream.push(template)
  })

  return (
    <>
      <div className="mb-2 flex items-center justify-between p-4 dark:bg-black lg:bg-white lg:dark:bg-grey-7">
        <SectionHeader
          icon="fire-alt"
          iconClassName="text-white"
          title="Hot Thread"
          className="bg-red"
        />
        <SwitchThumbnail isThumbnail={isThumbnail} onChange={setThumbnail} />
      </div>
      {!isLoading && hotThreadStream.map((card) => card)}
      {!isLoading && (
        <LoadMoreContextProvider
          className="p-2"
          onVisible={() => {
            // console.log('loadMore')
          }}
        >
          <LoadingGif />
        </LoadMoreContextProvider>
      )}
    </>
  )
}

export default HotThreadSection
