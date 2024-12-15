import type {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormReset,
  UseFormResetField,
  UseFormSetValue,
  UseFormTrigger,
} from 'react-hook-form'

export type FormProps<T extends FieldValues> = {
  register: UseFormRegister<T>
  reset: UseFormReset<T>
  resetField: UseFormResetField<T>
  setValue: UseFormSetValue<T>
  isValid: boolean
  errors: FieldErrors<T>
  trigger: UseFormTrigger<T>
  getValues: UseFormGetValues<T>
}
