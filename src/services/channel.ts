import useSWR from 'swr'
import { Channel } from 'types/channel'
import { ApiResponse } from 'types/common'

const MOCK_CHANNEL_HEADER_API_URL = '/api/channel'
const CHANNEL_HEADER_API_URL = 'https://www.kaskus.local/api/channel_header'

export const useChannelMock = () => {
  return useSWR<ApiResponse<Channel[]>>(MOCK_CHANNEL_HEADER_API_URL)
}

export const useChannelHeader = () => {
  return useSWR<ApiResponse<Channel[]>>(CHANNEL_HEADER_API_URL)
}
