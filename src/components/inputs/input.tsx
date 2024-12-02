import { Input, type InputProps } from '@nextui-org/input'

type Props = InputProps & {
  form: string
  message?: string
  register: any
}

export default function InputTorre({ form, message, register, ...props }: Props) {
  return <Input form={form} {...register(form)} isInvalid={!!message} errorMessage={message} {...props} />
}
