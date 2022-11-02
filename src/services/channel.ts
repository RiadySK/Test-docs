import { API_URL_CHANNEL_HEADER } from 'constant/api'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { Channel } from 'types/channel'
import { ApiResponse } from 'types/common'
import { flatSWRInfiniteAPIResp } from 'utils/api'

export const useChannelHeader = () => {
  return useSWR<ApiResponse<Channel[]>>(API_URL_CHANNEL_HEADER)
}

function getKey(cur: any, previousPageData: ApiResponse<Channel[]>) {
  if (previousPageData && previousPageData.meta?.cursor) {
    // Handling reach end of the pagination
    // if (previousPageData.meta.pagination.next_cursor > previousPageData.meta.pagination.total) {
    //   return null;
    // }
    return '/api/channel/channel_header?page=' + previousPageData.meta.cursor;
  }
  return '/api/channel/channel_header?page=' + cur;
}

// Testing SWR INFINITE - Mock Only
export const useChannelHeaderInf = () => {
  return flatSWRInfiniteAPIResp(useSWRInfinite<ApiResponse<Channel[]>>(getKey, null, {
    initialSize: 3,
    revalidateFirstPage: false
  }))
}
