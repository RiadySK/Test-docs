export interface ApiResponse<T> {
  data: T,
  meta?: {
    pagination?: Pagination
  },
  error?: {}
}

export interface Pagination {
  total: number,
  next_cursor: string
}
