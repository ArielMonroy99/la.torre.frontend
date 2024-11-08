'use server'
import { cookies } from 'next/headers'

export const setUserSession = async (token: string) => {
  const cookieStorage = await cookies()
  cookieStorage.set('token', token)
}

export const removeUserSession = async () => {
  const cookieStorage = await cookies()
  cookieStorage.delete('token')
}

export const getUserSession = async () => {
  const cookieStorage = await cookies()
  return cookieStorage.get('token')?.value
}
