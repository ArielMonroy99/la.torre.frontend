'use client'
import PolicyTable from '@/components/policies/policie.table'
import { Roles } from '@/constants/roles'
import RoleGuard from '@/guards/role.guard'

export default function Page() {
  return (
    <RoleGuard permitedRoles={[Roles.ADMINISTRATOR]}>
      <>
        <h1>Políticas</h1>
        <PolicyTable />
      </>
    </RoleGuard>
  )
}
