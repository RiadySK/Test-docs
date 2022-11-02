import { API_URL_CHANNEL_KASKUSTV } from 'constant/api'
import useSWR from 'swr'
import { ApiResponse } from 'types/common'
import { KaskusTV } from 'types/kaskustv'

export const useKaskusTV = () => {
  return useSWR<ApiResponse<KaskusTV>>(API_URL_CHANNEL_KASKUSTV)
}
