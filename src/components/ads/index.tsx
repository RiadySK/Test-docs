import { useEffect } from 'react'
export * from './config'
interface Props {
  ad_unit: string
  placement: string
  kaskus_dfp_channel: string
  sizes: number[][]
  // size_mapping?: number[][] size_mapping is disabled due kaskus ad_unit not use it currently
  pos: string
  list_type?: string
  adx_permission?: boolean
  className?: string
}

const Ads = ({
  ad_unit,
  sizes,
  // size_mapping, size_mapping is disabled due kaskus ad_unit not use it currently
  placement,
  pos,
  list_type,
  adx_permission,
  kaskus_dfp_channel,
  className,
}: Props) => {
  useEffect(() => {
    if (!window || !ad_unit.length) return

    window.googletag = window.googletag || { cmd: [] }

    googletag.cmd.push(function () {
      googletag
        .defineSlot(ad_unit, sizes, placement)
        // .defineSizeMapping(size_mapping)
        .setTargeting('pos', pos)
        .setTargeting('adxPermission', '' + adx_permission + '')
        .setTargeting('listType', '' + list_type + '')
        .setTargeting('channel', '' + kaskus_dfp_channel + '')
        .addService(googletag.pubads())

      googletag.pubads().enableAsyncRendering()
      googletag.pubads().enableSingleRequest()
      googletag.pubads().collapseEmptyDivs()
      googletag.enableServices()

      setTimeout(async () => {
        ;(await googletag) && googletag.display(placement)
      }, 300)
    })
  }, [ad_unit])

  return <div id={placement} className={className}></div>
}

export default Ads
