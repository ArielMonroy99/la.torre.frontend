import type { QueryParamsDto } from '@/types/backend.types'

export const getQueryParams = (queryParams: QueryParamsDto): string => {
  const { page, limit, filter, order, direction } = queryParams
  return `?page=${page ?? 0}&limit=${limit ?? 10}&filter=${filter ?? ''}&order=${order ?? 'id'}&direction=${direction ?? 'ASC'}`
}
