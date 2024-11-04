import type { QueryParamsDto } from '@/app/types/backend.types'

export const getQueryParams = (queryParams: QueryParamsDto): string => {
  const { page, limit, filter, order, direction } = queryParams
  return `?page=${page}&limit=${limit}&filter=${filter}&order=${order}&direction=${direction}`
}
