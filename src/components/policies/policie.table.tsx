import { getPoliciesAction } from '@/actions/policies.actions'
import PolicyTableCell from '@/components/policies/policie.table-cell'
import { Icons } from '@/constants/icons'
import { useTable } from '@/hooks/useTable'
import type { Policy } from '@/types/policy.types'
import type { ColumnDescriptor } from '@/types/table.types'
import { Icon } from '@iconify/react'
import { Button } from '@nextui-org/button'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import { Input } from '@nextui-org/input'
import { Pagination } from '@nextui-org/pagination'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table'
import { useEffect, useMemo } from 'react'

const columns: ColumnDescriptor[] = [
  { name: 'Objeto', id: 'object', allowsSorting: true },
  { name: 'Sujeto', id: 'subject', allowsSorting: true },
  { name: 'Acción', id: 'action', allowsSorting: true },
  { name: 'Acciones', id: 'actions', allowsSorting: false },
]

const INITIAL_VISIBLE_COLUMNS = ['object', 'subject', 'action', 'actions']

export default function PolicyTable() {
  const {
    filterValue,
    visibleColumns,
    page,
    data,
    totalItems,
    setVisibleColumns,
    setPage,
    rowsPerPage,
    onRowsPerPageChange,
    onSearchChange,
    sortDescriptor,
    setSortDescriptor,
    loadItems,
  } = useTable<Policy>({
    initialVisibleColumns: INITIAL_VISIBLE_COLUMNS,
    initialRowsPerPage: 10,
    initialSortDescriptor: { column: 'object', direction: 'descending' },
    fetchAction: getPoliciesAction,
  })

  useEffect(() => {
    loadItems()
  }, [loadItems])

  const topContent = useMemo(() => {
    return (
      <div>
        <h3>Políticas</h3>
        <Input value={filterValue} isClearable onValueChange={onSearchChange} startContent={<Icon icon={Icons.reports} />} />
        <div>
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
          <div>
            <Button variant="solid">Agregar</Button>
          </div>
        </div>
      </div>
    )
  }, [filterValue, visibleColumns, onSearchChange, setVisibleColumns, onRowsPerPageChange])

  const bottomContent = useMemo(() => {
    return (
      <div>
        {totalItems > 0 && (
          <>
            <span>Total: {totalItems}</span>
            <span>Pagina: {page}</span>
            <Pagination
              isCompact
              initialPage={1}
              showControls={totalItems > rowsPerPage}
              total={Math.ceil(totalItems / rowsPerPage)}
              page={page}
              onChange={setPage}
            />
          </>
        )}
      </div>
    )
  }, [totalItems, page, setPage, rowsPerPage])

  const headerColumns = useMemo(() => {
    return columns.filter(column => Array.from(visibleColumns).includes(column.id))
  }, [visibleColumns])

  return (
    <div>
      <Table
        aria-label="Policies"
        topContent={topContent}
        topContentPlacement={'outside'}
        bottomContent={bottomContent}
        bottomContentPlacement="inside"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        isVirtualized
        isHeaderSticky
        isCompact
      >
        <TableHeader columns={headerColumns}>
          {column => (
            <TableColumn key={column.id} {...column}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={data}
          emptyContent={
            <div className="flex">
              No data <Icon icon={Icons.reports} />
            </div>
          }
        >
          {item => (
            <TableRow key={item.object + item.subject + item.action}>
              {columnKey => (
                <TableCell>
                  <PolicyTableCell columnKey={columnKey} item={item} />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
