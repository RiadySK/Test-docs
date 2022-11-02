import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { ApiResponse } from 'types/common'

import { Thread } from 'types/thread'
import getFetcher from './kaskusApi'

const API_THREAD_PATH = '/api/thread'

const useThreadMock = (query = '') => {
  return useSWR<ApiResponse<Thread[]>>(`${API_THREAD_PATH}?q=${query}`)
}

// try useSWRInfinite
const useThreadInfiniteMock = (query = '', cursor = '') => {
  const URL = `${API_THREAD_PATH}?q=${query}&cursor=${cursor}`

  const getThreadInfiniteKey = (
    pageIndex: number,
    previousPageData: Thread[],
  ) => {
    if (previousPageData && !previousPageData.length) return null
    return `${URL}&index=${pageIndex}`
  }

  return useSWRInfinite<ApiResponse<Thread[]>>(
    getThreadInfiniteKey,
    getFetcher(URL),
  )
}

// Temporary testing for old API
const useThread = (
  url = 'https://webstaging.kaskus.co.id/api/oauth/v1/forum/22/threads',
) => {
  return useSWR<ApiResponse<Thread[]>>(url, getFetcher(url))
}

export { useThreadMock, useThreadInfiniteMock }
export default useThread
