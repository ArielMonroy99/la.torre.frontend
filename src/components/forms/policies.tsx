import { createPolicyAction } from '@/actions/policies.actions'
import InputTorre from '@/components/inputs/input'
import SelectTorre from '@/components/inputs/select'
import { policieSchema } from '@/components/schemas/policies.schema'
import type { Policy } from '@/types/policy.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/button'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

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
export default function PolicyForm() {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<Policy>({ resolver: zodResolver(policieSchema) })

  const handleSubmitAction = async (payload: Policy) => {
    const formData = new FormData()
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value as string)
    })
    const result = await createPolicyAction(formData)
    toast(result.status)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitAction)} className="flex flex-col gap-5">
      <InputTorre register={register} form={'object'} errorMessage={errors?.object?.message} label="Objeto" />
      <SelectTorre
        form={'subject'}
        label="Sujeto"
        message={errors?.subject?.message}
        register={register}
        setValue={setValue}
        items={roles}
      />
      <SelectTorre
        form={'action'}
        label="Acciones"
        message={errors?.object?.message}
        register={register}
        setValue={setValue}
        items={acciones}
      />
      <Button variant={'solid'} color={'primary'} type={'submit'}>
        Guardar
      </Button>
    </form>
  )
}
