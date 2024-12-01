import { Select, SelectItem, type SelectProps } from '@nextui-org/select'
import type { SharedSelection } from '@nextui-org/system'

type Props = Omit<SelectProps, 'children'> & {
  form: string
  message?: string
  register: any
  items: { label: string; key: string }[]
  setValue: any
}

export default function SelectTorre({ form, message, register, items, setValue, ...props }: Props) {
  const handleChange = (set: SharedSelection) => {
    console.log(`set ${set}`)
  }
  return (
    <div>
      <input {...register(form)} hidden />
      <Select
        form={form}
        items={items}
        isInvalid={!!message}
        errorMessage={message}
        {...props}
        onSelectionChange={handleChange}
        aria-labelledby="Select"
      >
        {items.map(item => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}
