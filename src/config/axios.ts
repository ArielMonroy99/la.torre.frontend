import axios from 'axios'
import { cookies } from 'next/headers'
const API_HOST = process.env.API_HOST

export const axiosServer = axios.create({
  baseURL: API_HOST,
})

axiosServer.interceptors.request.use(
  async config => {
    const cookieStorage = await cookies()
    const token = cookieStorage.get('token')?.value
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    Promise.reject(error)
  },
)
