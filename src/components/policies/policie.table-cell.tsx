import { Icons } from '@/constants/icons'
import type { Policy } from '@/types/policy.types'
import { Icon } from '@iconify/react'
import { Button } from '@nextui-org/button'
import { Chip } from '@nextui-org/chip'
import type { Key } from 'react'

type CellProps = {
  item: Policy
  columnKey: Key
}

export default function PolicyTableCell({ columnKey, item }: CellProps) {
  const value = item[columnKey as keyof Policy]
  switch (columnKey) {
    case 'object':
      return <span className="whitespace-nowrap text-base text-gray-500">{item.object}</span>
    case 'subject':
      return <span className="whitespace-nowrap text-base text-gray-500">{item.subject}</span>
    case 'action':
      return (
        <>
          {item.action.split('|').map(action => (
            <Chip key={action} className="mx-1 bg-teal-400">
              <span className="text-sm text">{action}</span>
            </Chip>
          ))}
        </>
      )
    case 'actions':
      return (
        <span className="py-4 whitespace-nowrap text-base text-gray-500 justify-end">
          <Button variant="solid" size="sm" isIconOnly>
            <Icon icon={Icons.sells} />
          </Button>
        </span>
      )
    default:
      return <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{value}</td>
  }
}
