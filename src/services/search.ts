import { API_URL_SEARCH_POPULAR } from 'constant/api'
import useSWR from 'swr'
import { ApiResponse } from 'types/common'

export function useSearchPopular() {
  return useSWR<ApiResponse<string[]>>(API_URL_SEARCH_POPULAR, null, {
    revalidateOnFocus: false
  })
}