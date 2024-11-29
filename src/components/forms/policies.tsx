import SelectTorre from '@/components/inputs/select'
import { policieSchema } from '@/components/schemas/policies.schema'
import type { Policy } from '@/types/policy.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function PolicyForm({ policy }: { policy?: Policy }) {
  const roles = [
    { label: 'ADMINISTRADOR', key: 'ADMINISTRATOR' },
    { label: 'USUARIO', key: 'USER' },
    { label: 'COCINA', key: 'KITCHEN' },
    { label: 'CAJERO', key: 'CASHIER' },
  ]
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<Policy>({ resolver: zodResolver(policieSchema) })
  return (
    <form>
      <SelectTorre form={'object'} message={errors.object?.message} register={register} setValue={setValue} items={roles} />
    </form>
  )
}
