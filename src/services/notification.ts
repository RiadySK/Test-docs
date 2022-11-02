import { API_URL_NOTIFICATION } from 'constant/api'
import useSWR from 'swr'
import { ApiResponse } from 'types/common'
import { NotificationList } from 'types/notification'

export const useNotification = () => {
  return useSWR<ApiResponse<NotificationList>>(API_URL_NOTIFICATION)
}
