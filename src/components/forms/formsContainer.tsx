import { zodResolver } from '@hookform/resolvers/zod'
import { type JSX, useEffect, useRef, useState, useTransition } from 'react'
import {
  type FieldErrors,
  type FieldPath,
  type UseFormGetValues,
  type UseFormRegister,
  type UseFormReset,
  type UseFormResetField,
  type UseFormSetValue,
  type UseFormTrigger,
  useForm,
} from 'react-hook-form'
import { toast } from 'sonner'
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
  action: (payload: FormData) => any | Promise<any>
  schema: ZodSchema
}

export default function FormContainer({ children, action, schema }: Props) {
  const { register, reset, resetField, setValue, trigger, getValues, formState, setError, handleSubmit } = useForm({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })

  const isInitialMount = useRef(0)
  const [state, setState] = useState<any>(null) // Use local state to store the result
  const [isPending, startTransition] = useTransition()

  const [localAction, setLocalAction] = useState(() => action) // Store the action

  useEffect(() => {
    trigger(isInitialMount.current < 2 ? '' : undefined)
    if (isInitialMount.current < 2) {
      isInitialMount.current = isInitialMount.current + 1
    }
  }, [trigger])

  useEffect(() => {
    if (state?.status === 'error') {
      state.errors?.forEach((error: any) => {
        setError(error.path as FieldPath<any>, { message: error.message })
      })
    }
  }, [state, setError])

  const handleSubmitAction = async (payload: any) => {
    const formData = new FormData()
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value as string)
    })
    const result = await action(formData)
    toast(result.status)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitAction)}>
      {children({
        register,
        reset,
        resetField,
        setValue,
        isValid: formState.isValid,
        errors: formState.errors,
        state: state,
        isPending: isPending,
        trigger,
        getValues,
      })}
    </form>
  )
}
