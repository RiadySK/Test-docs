import useSWR from 'swr'
import { Kreator } from 'types/creator'

export const useCreatorMock = () => {
  return useSWR<Kreator[]>('/api/creator', null, { revalidateOnFocus: false })
}
