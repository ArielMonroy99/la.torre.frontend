'use client'
import { getUserDataAction, loginAction } from '@/actions/auth.actions'
import type { AuthContextType, UserData } from '@/types/auth.types'
import { getUserSession, removeUserSession, setUserSession } from '@/utils/cookie.utils'
import { isValidSession } from '@/utils/utils'
import { redirect } from 'next/navigation'
import { type ReactNode, createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext<AuthContextType | null>(null)

type Props = {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<UserData | null>(null)
  const initialize = async () => {
    const token = await getUserSession()
    if (token && (await isValidSession(token))) {
      const result = await getUserDataAction()
      if (result.status === 'error') {
        console.log('Error al obtener los datos del usuario')
        await removeUserSession()
        redirect('/login')
        return
      }
      setUser(result)
    }
  }

  useEffect(() => {
    initialize()
  }, [])

  const login = async (username: string, password: string) => {
    const result = await loginAction({ username, password })
    if (result.status === 'success') {
      setUser(result)
      await setUserSession(result.accessToken)
      redirect('platform/home')
    }
  }

  const logout = async () => {
    await removeUserSession()
    setUser(null)
    redirect('/login')
  }

  const value = {
    isLogged: !!user,
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider')
  }
  return context
}
