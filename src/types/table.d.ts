export type TableColumn = {
  field: string
  label?: string
  children?: TableColumn[]
} & Recordable

export type TableSlotDefault = {
  row: Recordable
  column: TableColumn
  $index: number
} & Recordable

