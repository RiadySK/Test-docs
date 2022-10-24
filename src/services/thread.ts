import useSWR from 'swr'
import { ApiResponse } from 'types/common'

import { Thread } from 'types/thread'
import getFetcher from './kaskusApi'

const useThreadMock = (query = '') => {
  return useSWR<ApiResponse<Thread[]>>(`/api/thread?q=${query}`)
}

// Temporary testing for old API
const useThread = (
  url = 'https://webstaging.kaskus.co.id/api/oauth/v1/forum/22/threads',
) => {
  return useSWR<ApiResponse<Thread[]>>(url, getFetcher(url))
}

export { useThreadMock }
export default useThread
