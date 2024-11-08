export const endpoints = {
  login: '/auth',
  getPolicies: '/policy',
  savePolicy: '/policy',
  updatePolicy: (id: number) => `/policy${id}`,
  removePolicy: (id: number) => `/policy${id}`,
}
