import * as React from 'react'
import {Table} from '../Table'
import {TableBody} from '../TableBody'
import {TableCell} from '../TableCell'
import {TableHead} from '../TableHead'
import {TableRow} from '../TableRow'

/**
 * The type of a row object in the array `data` passed to `GenerateTable`.
 * `T` should be a string literal union.
 */
export type TableRowType<T extends string> = {
  [key in T]: React.ReactNode
}

/**
 * the type of an item in the array passed to `GenerateTable`'s `headers` prop.
 * `T` should be a string literal union.
 */
export type TableHeaderType<T extends string> = {
  key: T
  label?: string
} | T

/**
 * The type of the data used to generate a table with `GenerateTable`. `T` should be a string literal union.
 */
export type TableData<T extends string> = TableRowType<T>[]

interface GenerateTableProps<T extends string> {
  /**
   * The data used for the table. Each object represents a row, and there should be one key for each header
   */
  data: TableData<T>
  /**
   * The headers of the table. Can be an array of strings or an array of `{key: T, label: string}`
   */
  headers: TableHeaderType<T>[]
}

/**
 * Generates a table using Clear's `<Table>`, `<TableHead>`, `<TableBody>`, `<TableRow>`, and `<TableCell>` components
 * based on the `data` array and `headers` array passed to it.
 *
 * https://chadlavi.github.io/clear/#/table#generatetable
 */
export const GenerateTable = <T extends string>({data, headers}: GenerateTableProps<T>): JSX.Element => (
  <Table>
    <TableHead>
      <TableRow>
        {headers.map((h, i) => (
          <TableCell key={`${h}-${i}`} as='th'>
            {typeof h === 'string' ? `${h.charAt(0).toUpperCase()}${h.slice(1)}` : h.label || h.key}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((r) => (
        <TableRow key={JSON.stringify(r)}>
          {headers.map((c, i) => (
            <TableCell key={`${c}-${i}`}>{r[typeof c === 'string' ? c : c.key]}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
