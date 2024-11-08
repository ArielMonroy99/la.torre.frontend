'use server'
import { axiosServer } from '@/config/axios'
import { endpoints } from '@/constants/endpoints'
import type { LoginRequest, LoginResponse } from '@/types/auth.types'
import type { BackendResponse } from '@/types/backend.types'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const login = async ({ username, password }: LoginRequest) => {
  const cookieStore = await cookies()
  const respuesta = await axiosServer.post<BackendResponse<LoginResponse>>(endpoints.login, {
    username,
    password,
  })
  const { data } = respuesta.data
  console.log(data)
  if (respuesta.data.success) {
    cookieStore.set('token', data.accessToken, {
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
      secure: true,
      path: '/',
    })
    redirect('/platform/home')
  }
}

export const logout = async () => {
  try {
    const cookieStore = await cookies()
    cookieStore.delete('token')
  } catch (error) {
    console.error(error)
  } finally {
    redirect('/login')
  }
}
