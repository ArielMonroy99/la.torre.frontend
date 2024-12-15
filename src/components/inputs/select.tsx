import { Select, SelectItem, type SelectProps } from '@nextui-org/select'
import type { ChangeEvent } from 'react'
import type { UseFormRegister, UseFormSetValue } from 'react-hook-form'

type Props = Omit<SelectProps, 'children'> & {
  form: string
  message?: string
  register: UseFormRegister<any>
  items: { label: string; key: string }[]
  setValue: UseFormSetValue<any>
}

export default function SelectTorre({ form, message, register, items, setValue, ...props }: Props) {
  const { onChange, ref } = register(form)
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(form, event.target.value)
    onChange({
      target: { name: form, value: event.target.value },
    })
  }
  return (
    <div>
      <input {...register(form)} ref={ref} hidden />
      <Select
        form={form}
        items={items}
        isInvalid={!!message}
        errorMessage={message}
        {...props}
        onChange={handleChange}
        aria-labelledby="Select"
      >
        {items.map(item => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}
