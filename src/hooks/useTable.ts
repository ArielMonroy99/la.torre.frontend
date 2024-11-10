import type { ActionFunction } from '@/types/actions.types'
import type { ListResponse, QueryParamsDto } from '@/types/backend.types'
import type { Selection, SortDescriptor } from '@nextui-org/table'

import { useCallback, useMemo, useState } from 'react'
type UseTableProps<T> = {
  initialVisibleColumns: string[]
  initialRowsPerPage: number
  initialSortDescriptor: SortDescriptor
  fetchAction: ActionFunction<QueryParamsDto, ListResponse<T>>
}

export function useTable<T>({ initialVisibleColumns, initialRowsPerPage, initialSortDescriptor, fetchAction }: UseTableProps<T>) {
  const [filterValue, setFilterValue] = useState('')
  const [selectedKeys, setSelectedKeys] = useState([])
  const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set<string>(initialVisibleColumns))
  const [statusFilter, setStatusFilter] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage)
  const [page, setPage] = useState(1)
  const [sortDescriptor, setSortDescriptor] = useState(initialSortDescriptor)
  const [data, setData] = useState<T[]>([])
  const [totalItems, setTotalItems] = useState(0)

  const loadItems = useCallback(async () => {
    const response = await fetchAction({
      page: page,
      limit: rowsPerPage,
      filter: filterValue,
      order: sortDescriptor.column?.toString(),
      sort: sortDescriptor.direction === 'ascending' ? 'ASC' : 'DESC',
      status: statusFilter,
    })
    console.log(response)
    if (response.status === 'success') {
      const { data } = response
      setData(data.content)
      setTotalItems(data.totalElements)
    } else {
      setTotalItems(0)
      setData([])
    }
  }, [fetchAction, page, rowsPerPage, filterValue, sortDescriptor, statusFilter])

  const onNextPage = useCallback(() => {
    if (page + 1 < Math.ceil(totalItems / rowsPerPage)) {
      setPage(page + 1)
    }
  }, [page, totalItems, rowsPerPage])

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1)
    }
  }, [page])

  const onRowsPerPageChange = useCallback((newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage)
    setPage(1)
  }, [])

  const onSearchChange = useCallback((value: string) => {
    setFilterValue(value)
    setPage(1)
  }, [])

  return useMemo(
    () => ({
      filterValue,
      selectedKeys,
      visibleColumns,
      statusFilter,
      rowsPerPage,
      page,
      sortDescriptor,
      data,
      totalItems,
      setFilterValue,
      setSelectedKeys,
      setVisibleColumns,
      setStatusFilter,
      setRowsPerPage,
      setPage,
      setSortDescriptor,
      onNextPage,
      onPreviousPage,
      onRowsPerPageChange,
      onSearchChange,
      loadItems,
    }),
    [
      filterValue,
      setFilterValue,
      selectedKeys,
      setSelectedKeys,
      visibleColumns,
      setVisibleColumns,
      statusFilter,
      setStatusFilter,
      rowsPerPage,
      setRowsPerPage,
      page,
      setPage,
      sortDescriptor,
      setSortDescriptor,
      loadItems,
      onNextPage,
      onPreviousPage,
      onRowsPerPageChange,
      onSearchChange,
      data,
      totalItems,
    ],
  )
}
