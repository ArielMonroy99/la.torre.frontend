export type ListResponse<T> = {
  data: Pagination<T>
  message: string
  success: boolean
}

export type BackendResponse<T> = {
  data: T
  message: string
  success: boolean
}

export type QueryParamsDto = {
  page?: number
  limit?: number
  filter?: string
  order?: string
  direction?: string
}

export type Pagination<T> = {
  content: T[]
  totalElements: number
  page: number
  size: number
}
