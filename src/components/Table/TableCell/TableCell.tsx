import styled from 'styled-components'

/**
 * A simple styled `<td>`
 *
 * Can also be used to create a `<th>`:
 *
 * ```tsx
 * <TableCell as='th'>
 *  This will be rendered as a `<th>`
 * </TableCell>
 * ```
 *
 * https://chadlavi.github.io/clear/#/table
 */
export const TableCell = styled('td')`
  text-align: left;
  padding: var(--clear-unit);
`
