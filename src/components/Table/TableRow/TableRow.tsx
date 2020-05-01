import styled from 'styled-components'

/**
 * A simple styled `<tr>`
 *
 * https://chadlavi.github.io/clear/#/table#tablerow
 */
export const TableRow = styled('tr')`
  &:nth-child(even) {
    td {
      background-color: var(--clear-zebra);
    }
    td:first-child {
      border-radius: var(--clear-unit) 0 0 var(--clear-unit);
    }
    td:last-child {
      border-radius: 0 var(--clear-unit) var(--clear-unit) 0;
    }
  }
`
