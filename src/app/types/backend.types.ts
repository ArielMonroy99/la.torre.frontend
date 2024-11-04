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
