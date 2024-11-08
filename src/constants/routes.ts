import { Icons } from '@/constants/icons'
import { Roles } from '@/constants/roles'
import type { Group, Route } from '@/types/sidebar.types'

export const groups: { [key: string]: Group } = {
  administration: {
    id: 1,
    name: 'Administración',
    description: 'Administración de la aplicación',
  },
  sells: {
    id: 2,
    name: 'Ventas',
    description: 'Administración de Ventas',
  },
  reports: {
    id: 3,
    name: 'Reportes',
    description: 'Reportes',
  },
}

export const routes: Route[] = [
  {
    id: 1,
    name: 'Usuarios',
    group: groups.administration,
    route: '/platform/users',
    icon: Icons.users,
    roles: [Roles.ADMINISTRATOR],
  },
  {
    id: 2,
    name: 'Categorías',
    group: groups.administration,
    route: '/platform/categories',
    icon: Icons.categories,
    roles: [Roles.ADMINISTRATOR],
  },
  {
    id: 3,
    name: 'Inventario',
    group: groups.administration,
    route: '/platform/inventory',
    icon: Icons.inventory,
    roles: [Roles.ADMINISTRATOR, Roles.KITCHEN, Roles.CASHIER],
  },
  {
    id: 4,
    name: 'Ventas',
    group: groups.sells,
    route: '/platform/sells',
    icon: Icons.sells,
    roles: [Roles.ADMINISTRATOR, Roles.CASHIER],
  },
  {
    id: 5,
    name: 'Productos',
    group: groups.sells,
    route: '/platform/products',
    icon: Icons.products,
    roles: [Roles.ADMINISTRATOR, Roles.CASHIER],
  },
  {
    id: 6,
    name: 'Descuentos',
    group: groups.sells,
    route: '/platform/discounts',
    icon: Icons.discounts,
    roles: [Roles.ADMINISTRATOR],
  },
  {
    id: 7,
    name: 'Reportes',
    group: groups.reports,
    route: '/platform/reports',
    icon: Icons.reports,
    roles: [Roles.ADMINISTRATOR],
  },
]
