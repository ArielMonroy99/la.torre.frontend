import { getPoliciesAction } from '@/actions/policies.actions'
import PolicyTableCell from '@/components/policies/policie.table-cell'
import { Icons } from '@/constants/icons'
import { useModal } from '@/hooks/useModal'
import { useTable } from '@/hooks/useTable'
import type { Policy } from '@/types/policy.types'
import type { ColumnDescriptor } from '@/types/table.types'
import { Icon } from '@iconify/react'
import { Button } from '@nextui-org/button'
import { Pagination } from '@nextui-org/pagination'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table'
import { useCallback, useEffect, useMemo } from 'react'
import TopContent from '../table/top.content'

const columns: ColumnDescriptor[] = [
  { name: 'Objeto', id: 'object', allowsSorting: true },
  { name: 'Sujeto', id: 'subject', allowsSorting: true },
  { name: 'Acción', id: 'action', allowsSorting: true },
  { name: 'Acciones', id: 'actions', allowsSorting: false, align: 'end' },
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

  const { openModal } = useModal()

  const openAddModal = useCallback(() => {
    openModal('Agregar', '@/components/forms/policies')
  }, [openModal])

  const topContent = useMemo(() => {
    return (
      <div>
        <TopContent
          filterValue={filterValue}
          onRowsPerPageChange={onRowsPerPageChange}
          onSearchChange={onSearchChange}
          setVisibleColumns={setVisibleColumns}
          visibleColumns={visibleColumns}
          columns={columns}
          actions={[
            <Button key="agregar" onPress={openAddModal}>
              Agregar
            </Button>,
          ]}
        />
      </div>
    )
  }, [filterValue, visibleColumns, onSearchChange, setVisibleColumns, onRowsPerPageChange, openAddModal])

  const bottomContent = useMemo(() => {
    return (
      <div className="flex justify-between px-3">
        {totalItems > 0 && (
          <>
            <span>Total: {totalItems}</span>
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
    <>
      <Table
        aria-labelledby="Policies"
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
                <TableCell textValue="cell">
                  <PolicyTableCell columnKey={columnKey} item={item} />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}
