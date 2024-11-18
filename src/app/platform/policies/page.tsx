'use client'
import PolicyTable from '@/components/policies/policie.table'
import TableContainer from '@/components/table/table.container'
import { Roles } from '@/constants/roles'
import RoleGuard from '@/guards/role.guard'

export default function Page() {
  return (
    <RoleGuard permitedRoles={[Roles.ADMINISTRATOR]}>
      <TableContainer title="Políticas">
        <PolicyTable />
      </TableContainer>
    </RoleGuard>
  )
}
