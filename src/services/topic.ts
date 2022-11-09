import { API_URL_HOT_TOPICS } from 'constant/api'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { ApiResponse } from 'types/common'
import { HotTopic } from 'types/hotTopic'
import { flatSWRInfiniteAPIResp } from 'utils/api'

export const useHotTopics = () => {
  return useSWR<ApiResponse<HotTopic[]>>(API_URL_HOT_TOPICS)
}

export const useHotTopicsInf = (status = 1, limit = 20) => {
  return flatSWRInfiniteAPIResp(useSWRInfinite<ApiResponse<HotTopic[]>>((pageIndex: any, previousPageData?: ApiResponse<HotTopic[]>) => {
    if (previousPageData?.meta?.cursor) {
      return API_URL_HOT_TOPICS + '?status=' + status + '&cursor=' + previousPageData.meta.cursor + '&limit=' + limit;
    }
    return API_URL_HOT_TOPICS + '?status=' + status + '&cursor&limit=' + limit;
  }, null, {}))
}