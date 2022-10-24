import useSWR from 'swr'
import { ApiResponse } from 'types/common'
import { Community } from 'types/community'

// Trying to turn off revalidate on focus
export const useCommunityMock = (query = '') => {
  return useSWR<ApiResponse<Community[]>>('/api/community' + query, null, {
    revalidateOnFocus: false,
  })
}
