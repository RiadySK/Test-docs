import { API_URL_USER } from 'constant/api'
import useSWR from 'swr'
import { ApiResponse } from 'types/common'

import { User } from 'types/user'

export function useUser() {
  return useSWR<ApiResponse<User>>(API_URL_USER)
}