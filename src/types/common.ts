import { SWRInfiniteResponse } from "swr/infinite"

export interface ApiResponse<T> {
  data: T,
  meta?: {
    cursor?: string
    [key: string]: any
  },
  error?: {}
}

export interface SWRInfiniteFlatResponse<T, S> extends Omit<SWRInfiniteResponse<T, S>, 'data'> {
  data?: T
}