export const endpoints = {
  getPolicies: '/policies',
  savePolicy: '/policies',
  updatePolicy: (id: number) => `/policies${id}`,
  removePolicy: (id: number) => `/policies${id}`,
}
