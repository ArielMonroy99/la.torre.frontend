import InputTorre from '@/components/inputs/input'
import SelectTorre from '@/components/inputs/select'
import { policieSchema } from '@/components/schemas/policies.schema'
import type { Policy } from '@/types/policy.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const roles = [
  { label: 'ADMINISTRADOR', key: 'ADMINISTRATOR' },
  { label: 'USUARIO', key: 'USER' },
  { label: 'COCINA', key: 'KITCHEN' },
  { label: 'CAJERO', key: 'CASHIER' },
]
const acciones = [
  { label: 'GET', key: 'GET' },
  { label: 'POST', key: 'POST' },
  { label: 'PUT', key: 'PUT' },
  { label: 'DELETE', key: 'DELETE' },
]
export default function PolicyForm({ policy }: { policy?: Policy }) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<Policy>({ resolver: zodResolver(policieSchema) })
  return (
    <form className="flex flex-col gap-5">
      <InputTorre register={register} form={'object'} errorMessage={errors.subject?.message} label="Objeto" />
      <SelectTorre form={'subject'} label="Sujeto" message={errors.object?.message} register={register} setValue={setValue} items={roles} />
      <SelectTorre
        form={'action'}
        label="Acciones"
        message={errors.object?.message}
        register={register}
        setValue={setValue}
        items={acciones}
      />
    </form>
  )
}
