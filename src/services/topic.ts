import useSWR from 'swr'
import { ApiResponse } from 'types/common'

import { HotTopic } from 'types/hotTopics'

export const useTopicMock = () => {
  return useSWR<ApiResponse<HotTopic[]>>('/api/topic')
}
