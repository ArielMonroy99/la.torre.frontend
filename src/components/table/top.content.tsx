import { Icons } from '@/constants/icons'
import type { ColumnDescriptor } from '@/types/table.types'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from '@nextui-org/button'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown'
import { Input } from '@nextui-org/input'
import type { Selection } from '@nextui-org/table'
import type { ReactNode } from 'react'

type TopContentProp = {
  filterValue: string
  onSearchChange: any
  visibleColumns: Selection
  setVisibleColumns: any
  onRowsPerPageChange: any
  columns: ColumnDescriptor[]
  actions?: ReactNode[]
}

export default function TopContent({
  filterValue,
  onSearchChange,
  visibleColumns,
  setVisibleColumns,
  onRowsPerPageChange,
  columns,
  actions,
}: TopContentProp) {
  return (
    <div className="flex justify-between">
      <Input
        className="w-2/3"
        value={filterValue}
        isClearable
        onValueChange={onSearchChange}
        startContent={<Icon icon={Icons.reports} />}
      />
      <div className="ml-5 flex justify-between w-1/3">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="solid">Columnas</Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            closeOnSelect={false}
            selectedKeys={visibleColumns}
            selectionMode="multiple"
            onSelectionChange={setVisibleColumns}
            aria-label="columns"
          >
            {columns.map(column => (
              <DropdownItem key={column.id}>{column.name}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="solid" endContent={<Icon icon={Icons.sells} />}>
              Filas por pagina
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="filas" onAction={key => (onRowsPerPageChange ? onRowsPerPageChange(Number(key)) : null)}>
            {[10, 20, 50, 100].map(rows => (
              <DropdownItem key={rows}>{rows}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        {actions?.map(act => act)}
      </div>
    </div>
  )
}
