import axios from 'axios'
const API_HOST = process.env.API_HOST
export const axiosServer = axios.create({
  baseURL: API_HOST,
})
