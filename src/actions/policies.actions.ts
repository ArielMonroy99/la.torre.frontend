'use server'
import { policieSchema } from '@/components/schemas/policies.schema'
import { axiosServer } from '@/config/axios'
import { endpoints } from '@/constants/endpoints'
import type { ListResponse, QueryParamsDto } from '@/types/backend.types'
import type { Policy } from '@/types/policy.types'
import { getQueryParams } from '@/utils/queryParam.utils'
import { createServerAction, formAction } from '@/utils/server.action.utils'

export const getPoliciesAction = createServerAction<QueryParamsDto, ListResponse<Policy>>(async (queryParams: QueryParamsDto) => {
  const params = getQueryParams(queryParams)

  const respuesta = await axiosServer.get<ListResponse<Policy>>(`${endpoints.getPolicies}${params}`)
  const { data } = respuesta
  return { status: 'success', ...data }
})

export const createPolicyAction = formAction(policieSchema, async (policy: Policy) => {
  console.log('policy', policy)
  const respuesta = await axiosServer.post<Policy>(endpoints.createPolicy, policy)
  const { data } = respuesta
  return { status: 'success', ...data }
})
