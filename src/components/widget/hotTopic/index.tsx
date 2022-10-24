import classNames from 'classnames'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTopicMock } from '../../../services/topic'
import { useRef } from 'react'

import HotTopicCard from 'components/card/hotTopic'

import 'swiper/css'
import 'swiper/css/navigation'
import styles from './index.module.css'

interface Props {
  className?: string
}

const HotTopicWidget = ({ className }: Props) => {
  const { data, isLoading } = useTopicMock()
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  const renderSlider = () => {
    if (isLoading) {
      return <p className="text-center">Loading...</p>
    }

    if (data?.data.length) {
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
            {data.data.map((item) => {
              const { slug, thumbnail } = item
              return (
                <SwiperSlide
                  key={slug}
                  className={styles['hotTopicCardSlider']}
                >
                  <HotTopicCard slug={slug} thumbnail={thumbnail} />
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
            <kaskus-icon
              noPadding
              noClick
              cursor="pointer"
              variant="chevron-left"
            ></kaskus-icon>
          </div>
          <div
            className={classNames(
              styles['hotTopicArrowNext'],
              'group-hover:visible',
            )}
            ref={nextRef}
          >
            <kaskus-icon
              noPadding
              noClick
              cursor="pointer"
              variant="chevron-right"
            ></kaskus-icon>
          </div>
        </>
      )
    }
  }

  return (
    <div
      className={classNames(
        styles['hotTopic'],
        className,
        'bg-white dark:bg-grey-7',
      )}
    >
      <div className="mb-4 flex items-center justify-between px-4">
        <div className="flex h-7 w-7 flex-auto items-center">
          <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-white p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-current text-red"
            >
              <path d="M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z" />
            </svg>
          </div>
          <div className="text-l font-bold text-primary dark:text-primary-night">
            Hot Topics
          </div>
        </div>
        <a
          href="#"
          className="block flex-none text-sm text-blue dark:text-blue-night"
        >
          Lihat Semua
        </a>
      </div>
      <div className="group relative overflow-hidden pl-4 pr-1">
        {renderSlider()}
      </div>
    </div>
  )
}

export default HotTopicWidget
