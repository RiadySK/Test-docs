import { API_URL_HOT_THREADS, API_URL_HOT_THREADS_LANDING } from 'constant/api'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { ApiResponse } from 'types/common'
import { Thread } from 'types/thread'
import { flatSWRInfiniteAPIResp } from 'utils/api'

export const useHotThreadsLanding = () => {
  return useSWR<ApiResponse<Thread[]>>(API_URL_HOT_THREADS_LANDING)
}

export const useHotThreads = (channel_id = 0, limit = 20) => {
  return flatSWRInfiniteAPIResp(useSWRInfinite<ApiResponse<Thread[]>>((pageIndex: any, previousPageData?: ApiResponse<Thread[]>) => {
    if (previousPageData?.meta?.cursor) {
      return API_URL_HOT_THREADS + '?channel_id=' + channel_id + '&limit=' + limit + '&cursor=' + previousPageData.meta.cursor;
    }
    return API_URL_HOT_THREADS + '?channel_id=' + channel_id + '&limit=' + limit + '&cursor';
  }, null, {}))
}