import { axiosServer } from '@/app/config/axios'
import type { BackendResponse, QueryParamsDto } from '@/app/types/backend.types'
import type { Policy } from '@/app/types/policy.types'
import { getQueryParams } from '@/app/utils/queryParam.utils'

export const getPolicies = async (queryParams: QueryParamsDto) => {
  const params = getQueryParams(queryParams)
  const respuesta = await axiosServer.get<BackendResponse<Policy[]>>(`/policies ${params}`)
  const { data } = respuesta
  if (data.success) {
    return data
  }
  throw new Error(data.message)
}
