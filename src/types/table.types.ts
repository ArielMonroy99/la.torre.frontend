export type CellAlign = 'start' | 'center' | 'end'

export type ColumnDescriptor = {
  id: string
  name: string
  allowsSorting: boolean
  align?: CellAlign
}
