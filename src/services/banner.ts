import { API_URL_BANNER, API_URL_HOT_THREADS, API_URL_HOT_THREADS_LANDING } from 'constant/api'
import useSWR from 'swr'
import { ApiResponse } from 'types/common'

// Return html string
export const useBanners = (forumIds: number[], position: string, list_type: number) => {
  let queryForumIds = '';
  forumIds.forEach((item) => {
    queryForumIds = queryForumIds.concat('&forum_ids[]=' + item)
  })
  return useSWR<ApiResponse<string>>(API_URL_BANNER + '?position=' + position + '&list_type=' + list_type + queryForumIds)
}
