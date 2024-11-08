export type LoginResponse = {
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
