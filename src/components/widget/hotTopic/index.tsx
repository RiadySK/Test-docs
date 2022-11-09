import classNames from 'classnames'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useHotTopicsInf } from '../../../services/topic'
import { ReactNode, useRef } from 'react'

import Icon from 'components/common/icon'
import { URL_HOT_TOPIC_ALL } from 'constant/routes'
import HotTopicCard from 'components/card/hotTopic'
import { LoadingSpinner } from 'components/common/loading'

import 'swiper/css'
import 'swiper/css/navigation'
import styles from './index.module.css'
import SectionHeader from 'components/common/sectionHeader'

interface Props {
  className?: string
}

const HotTopicWidget = ({ className }: Props) => {
  const { data, isLoading } = useHotTopicsInf()
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  const renderSlider = (): ReactNode => {
    // if (!data?.data.length) return null

    return (
      <>
        <Swiper
          className={styles['hotTopicSwiper']}
          slidesPerView={'auto'}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {data?.data.map((item) => {
            const { slug, thumbnail, url } = item
            return (
              <SwiperSlide key={slug} className={styles['hotTopicCardSlider']}>
                <HotTopicCard
                  slug={slug}
                  thumbnail={thumbnail}
                  url={url}
                  isLoading={isLoading}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div
          className={classNames(
            styles['hotTopicArrowPrev'],
            'group-hover:visible',
          )}
          ref={prevRef}
        >
          <Icon className="text-grey-8" variant="chevron-left"></Icon>
        </div>
        <div
          className={classNames(
            styles['hotTopicArrowNext'],
            'group-hover:visible',
          )}
          ref={nextRef}
        >
          <Icon className="text-grey-8" variant="chevron-right"></Icon>
        </div>
      </>
    )
  }

  return (
    <div
      className={classNames(
        styles['hotTopic'],
        className,
        'border-y-4 border-grey-6 bg-white dark:bg-grey-7 lg:mb-4 lg:border-0',
      )}
    >
      <div className="mb-4 flex items-center justify-between px-4">
        <div className="flex h-7 w-7 flex-auto items-center">
          <SectionHeader
            icon="hashtag"
            iconClassName="text-red bg-white"
            title="Hot Topic"
          />
        </div>
        <a
          href={URL_HOT_TOPIC_ALL}
          className="block flex-none text-sm text-blue dark:text-blue-night"
        >
          Lihat Semua
        </a>
      </div>
      <div className="group relative overflow-hidden pl-4 pr-1">
        {renderSlider()}
        {isLoading && <LoadingSpinner className="mx-auto my-2" />}
      </div>
    </div>
  )
}

export default HotTopicWidget
