import useSWR from 'swr'
import { ApiResponse } from 'types/common'

import { User } from 'types/user'

const USER_API_URL = "https://www.kaskus.local/api/user";

export function useUserMock() {
  return useSWR<ApiResponse<User>>('/api/user')
}

export function useUser() {
  return useSWR<ApiResponse<User>>(USER_API_URL)
}