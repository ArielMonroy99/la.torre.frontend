export type UserData = {
  accessToken: string
  username: string
  name: string
  lastname: string
  email: string
  roles: Role[]
}

export type LoginRequest = {
  username: string
  password: string
}

export type Role = {
  role: string
}

export type AuthContextType = {
  isLogged: boolean
  user: UserData | null
  login: (username: string, password: string) => void
  logout: () => void
}
