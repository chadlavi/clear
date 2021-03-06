import {TableCell} from '../TableCell'
import styled from 'styled-components'

/**
 * A simple styled `<thead>`
 *
 * https://chadlavi.github.io/clear/#/table#tablehead
 */
export const TableHead = styled('thead')`
  ${TableCell} {
    font-size: var(--clear-font-size-label);
    text-align: left;
    padding: var(--clear-unit);
    padding-bottom: calc(var(--clear-unit) / 2);
  }
`

