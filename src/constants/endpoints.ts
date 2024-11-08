export const endpoints = {
  login: '/auth',
  getUserData: '/user/profile',
  getPolicies: '/policy',
  savePolicy: '/policy',
  updatePolicy: (id: number) => `/policy${id}`,
  removePolicy: (id: number) => `/policy${id}`,
}
