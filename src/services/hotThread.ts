import { API_URL_HOT_THREADS, API_URL_HOT_THREADS_LANDING } from 'constant/api'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { ApiResponse } from 'types/common'
import { HotThread } from 'types/hotThread'
import { flatSWRInfiniteAPIResp } from 'utils/api'

export const useHotThreadsLanding = () => {
  return useSWR<ApiResponse<HotThread[]>>(API_URL_HOT_THREADS_LANDING)
}

export const useHotThreads = (channel_id = 0, limit = 20) => {
  return flatSWRInfiniteAPIResp(
    useSWRInfinite<ApiResponse<HotThread[]>>(
      (pageIndex: any, previousPageData?: ApiResponse<HotThread[]>) => {
        if (previousPageData?.meta?.cursor) {
          return (
            API_URL_HOT_THREADS +
            '?channel_id=' +
            channel_id +
            '&limit=' +
            limit +
            '&cursor=' +
            previousPageData.meta.cursor
          )
        }
        return (
          API_URL_HOT_THREADS +
          '?channel_id=' +
          channel_id +
          '&limit=' +
          limit +
          '&cursor'
        )
      },
      null,
      {},
    ),
  )
}
