export const isValidSession = async (accessToken: string | null) => {
  if (!accessToken) {
    return false
  }
  const decoded = jwtDecode(accessToken)
  const time = Date.now() / 1000
  return decoded.exp > time
}

const jwtDecode = (token: string) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(''),
  )

  return JSON.parse(jsonPayload)
}
