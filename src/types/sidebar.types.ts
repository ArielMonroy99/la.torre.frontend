export type Group = {
  id: number
  name: string
  description: string
}
export type Route = {
  id: number
  name: string
  group: Group
  route: string
  icon: string
  roles: string[]
}
