import { API_URL_COMMUNITY_CHANNEL, API_URL_MY_COMMUNITY, PARAMS } from 'constant/api';
import useSWR from 'swr'
import { ApiResponse } from 'types/common'
import { Community, CommunityChannelVariant } from 'types/community'

// Trying to turn off revalidate on focus
export const useCommunityChannel = (channelId= '0', query = CommunityChannelVariant.Popular) => {
  return useSWR<ApiResponse<Community[]>>(API_URL_COMMUNITY_CHANNEL.replace(PARAMS.ID, channelId).replace(PARAMS.QUERY, query), null, {
    revalidateOnFocus: false,
  })
}

export const useMyCommunity = () => {
  return useSWR<ApiResponse<Community[]>>(API_URL_MY_COMMUNITY)
}