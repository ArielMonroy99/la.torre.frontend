import type { Roles } from '@/constants/roles'
import { useAuth } from '@/providers/auth.provider'
import type { ReactNode } from 'react'

type RoleGuardProps = {
  children: ReactNode
  permitedRoles: Roles[]
}

export default function RoleGuard({ children, permitedRoles }: RoleGuardProps) {
  const { user } = useAuth()

  if (user && permitedRoles.includes(user.role.role as Roles)) {
    return <>{children}</>
  }

  return <> {user && <span>Forbiden</span>}</>
}
