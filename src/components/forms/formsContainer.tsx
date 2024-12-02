import { zodResolver } from '@hookform/resolvers/zod'
import type { JSX } from 'react'
import {
  type FieldErrors,
  type UseFormGetValues,
  type UseFormRegister,
  type UseFormReset,
  type UseFormResetField,
  type UseFormSetValue,
  type UseFormTrigger,
  useForm,
} from 'react-hook-form'
import type { ZodSchema } from 'zod'

type Props = {
  children: (props: {
    register: UseFormRegister<any>
    reset: UseFormReset<any>
    resetField: UseFormResetField<any>
    setValue: UseFormSetValue<any>
    isValid: boolean
    errors: FieldErrors<any>
    state: any
    isPending: boolean
    trigger: UseFormTrigger<any>
    getValues: UseFormGetValues<any>
  }) => JSX.Element
  action: string | ((formData: FormData) => void | Promise<void>) | undefined

  schema: ZodSchema
}

export default function FormContainer({ children, action, schema }: Props) {
  const { register, reset, resetField, setValue, trigger, getValues, formState } = useForm({
    resolver: zodResolver(schema),
  })
  return (
    <form action={action}>
      {children({
        register,
        reset,
        resetField,
        setValue,
        isValid: formState.isValid,
        errors: formState.errors,
        state: formState,
        isPending: formState.isSubmitting,
        trigger,
        getValues,
      })}
    </form>
  )
}
