import { Fragment, ReactNode, Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import HotTopicWidget from '../../../../widget/hotTopic'
import HotThreadCard from 'components/card/thread'
import SectionHeader from 'components/common/sectionHeader'
import SwitchThumbnail from 'components/common/switchThumbnail'
import { LoadingSpinner } from 'components/common/loading'
const CommunitySection = dynamic(
  () => import('components/widget/communitySection'),
)

import { CardDisplayType } from 'types/hotThread'
import LoadMoreContextProvider from 'contexts/loadMore'
import {
  getLocalStorageCardDisplay,
  setLocalStorageCardDisplay,
} from 'utils/localstorage'
import { useHotThreads } from 'services/hotThread'
import { useCommunityChannel } from 'services/community'
import HotThreadCardSkeleton from 'components/card/thread/hotThreadCardSkeleton'

const HotThreadSection = () => {
  const { data, isLoading, isValidating, setSize, size } = useHotThreads()
  const { data: comPopData, isLoading: comPopIsLoading } = useCommunityChannel()

  const localStorageDisplayType = getLocalStorageCardDisplay()
  const [isThumbnail, setThumbnail] = useState<boolean>(
    localStorageDisplayType
      ? localStorageDisplayType === CardDisplayType.THUMBNAIL
      : true,
  )
  const displayType = isThumbnail
    ? CardDisplayType.THUMBNAIL
    : CardDisplayType.COMPACT

  const HOT_TOPIC = 5
  const POPULAR_COMMUNITY = 11

  useEffect(() => {
    if (displayType == localStorageDisplayType) return
    setLocalStorageCardDisplay(displayType)
  }, [displayType])

  const renderHotThreadStream = (): ReactNode => {
    if (!data?.data.length && isLoading) {
      const skeleton = [1, 2, 3]
      return skeleton.map((item) => (
        <HotThreadCardSkeleton key={item} displayType={displayType} />
      ))
    }

    return data?.data.map((thread, index) => {
      const key = `${thread.id} + ${index}`

      return (
        <Fragment key={key}>
          <HotThreadCard
            className="mb-4"
            item={thread}
            displayType={
              isThumbnail ? CardDisplayType.THUMBNAIL : CardDisplayType.COMPACT
            }
          />
          {index === HOT_TOPIC && <HotTopicWidget />}
          {index === POPULAR_COMMUNITY &&
            !comPopIsLoading &&
            comPopData?.data && (
              <CommunitySection
                title="Komunitas Populer"
                items={comPopData.data}
              />
            )}
        </Fragment>
      )
    })
  }

  return (
    <>
      <div className="mb-2 flex items-center justify-between bg-white p-4 dark:bg-grey-7">
        <SectionHeader
          icon="fire-alt"
          iconClassName="text-white bg-red"
          title="Hot Thread"
        />
        <SwitchThumbnail isThumbnail={isThumbnail} onChange={setThumbnail} />
      </div>
      {renderHotThreadStream()}
      {!isLoading && (
        <LoadMoreContextProvider
          className="p-2"
          onVisible={() => {
            if (!isValidating) {
              setSize(size + 1)
            }
          }}
        >
          <LoadingSpinner />
        </LoadMoreContextProvider>
      )}
    </>
  )
}

export default HotThreadSection
