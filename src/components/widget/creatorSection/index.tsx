import classNames from 'classnames'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Kreator } from '../../../types/creator'
import Creator from '../creator'

import 'swiper/css/navigation'
import styles from './index.module.css'
import Icon from 'components/common/icon'
import { useCreatorMock } from 'services/kreator'

interface CreatorSectionProps {
  className?: string
}

const CreatorSection = ({ className }: CreatorSectionProps) => {
  const { data, isLoading } = useCreatorMock()
  if (!data?.data.length) return null

  return (
    <div
      className={classNames(
        'group bg-grey-2 py-4 dark:bg-grey-8 lg:bg-white',
        className,
      )}
    >
      <div className="mx-4 mb-4 flex items-center justify-start">
        <img
          className="object-coverk h-5 w-5 lg:h-7 lg:w-7"
          src="http://placekitten.com/200/300"
          alt=""
        />
        <div className="mx-2 font-secondary text-base text-primary dark:text-primary-night lg:text-xl">
          Kreator Ngetop KASKUS
        </div>
      </div>
      <div className="relative">
        <Swiper
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          modules={[Navigation]}
          slidesPerView={1.2}
          spaceBetween={16}
          slidesOffsetAfter={16}
          slidesOffsetBefore={16}
          className={styles['creatorSwiper']}
        >
          {!isLoading &&
            data?.data.map((data, i) => (
              <SwiperSlide key={i}>
                <Creator item={data} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="prev align-item invisible absolute inset-y-1/2 left-5 right-auto z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer justify-center rounded-full bg-white shadow-md hover:opacity-50 group-hover:visible lg:flex">
          <Icon className="m-auto text-grey-8" variant="chevron-left" />
        </div>
        <div className="next align-item invisible absolute inset-y-1/2 left-auto -right-5 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer justify-center rounded-full bg-white shadow-md hover:opacity-50 group-hover:visible lg:flex">
          <Icon className="m-auto text-grey-8" variant="chevron-right" />
        </div>
      </div>
    </div>
  )
}

export default CreatorSection
