import { API_URL_TOP_CREATOR, PARAMS_API } from 'constant/api'
import useSWR from 'swr'
import { ApiResponse } from 'types/common'
import { Kreator } from 'types/creator'

export const useCreatorMock = (channelId = '0') => {
  return useSWR<ApiResponse<Kreator[]>>(API_URL_TOP_CREATOR.replace(PARAMS_API.ID, channelId), null, { revalidateOnFocus: false })
}
