import { useTheme } from 'next-themes'
import { useState } from 'react'
import Script from 'next/script'
import KaskusTvWidgetSkeleton from './skeleton'

const KaskusTvWidget = () => {
  const url = 'https://c.kaskus.id/'
  const [isLoading, setIsloading] = useState(true)
  const { theme } = useTheme()

  return (
    <>
      <div
        className="kaskus-tv-widget mb-4 h-[265px] overflow-hidden bg-white dark:bg-grey-7"
        data-nightmode={theme === 'dark' ? '1' : '0'}
        data-mode="VIDEO_ONLY"
      >
        {isLoading && <KaskusTvWidgetSkeleton />}
      </div>
      <Script
        src={`${url}/kaskus-tv/embed-resources/embed-widget-88a2e74f934d8226500fb7baee878e4c.js`}
        strategy="lazyOnload"
        onLoad={() => {
          setIsloading(false)
        }}
      />
    </>
  )
}

export default KaskusTvWidget
