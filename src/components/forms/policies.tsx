import InputTorre from '@/components/inputs/input'
import SelectTorre from '@/components/inputs/select'
import type { Policy } from '@/types/policy.types'
import { Button } from '@nextui-org/button'
import type { UseFormRegister, UseFormSetValue } from 'react-hook-form'

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

type Props = {
  register: UseFormRegister<Policy>
  errors: any
  setValue: UseFormSetValue<Policy>
}

export default function PolicyForm({ register, errors, setValue }: Props) {
  return (
    <div className="flex flex-col gap-5">
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
    </div>
  )
}
