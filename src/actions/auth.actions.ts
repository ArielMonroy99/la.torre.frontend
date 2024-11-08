'use server'
import { axiosServer } from '@/config/axios'
import { endpoints } from '@/constants/endpoints'
import type { LoginRequest, UserData } from '@/types/auth.types'
import type { BackendResponse } from '@/types/backend.types'
import { createServerAction } from '@/utils/server.action.utils'

export const loginAction = createServerAction<LoginRequest, UserData>(async ({ username, password }: LoginRequest) => {
  const respuesta = await axiosServer.post<BackendResponse<UserData>>(endpoints.login, {
    username,
    password,
  })
  const { data } = respuesta.data
  return { status: 'success', ...data }
})

export const getUserDataAction = createServerAction<{}, UserData>(async () => {
  const respuesta = await axiosServer.get<BackendResponse<UserData>>(endpoints.getUserData)
  const { data } = respuesta.data
  return { status: 'success', ...data }
})
