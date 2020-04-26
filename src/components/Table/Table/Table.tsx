import * as React from 'react'
import styled from 'styled-components'

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

const StyledTable = styled.table`
  border-collapse: collapse;
  flex-basis: 100%;
  width: 100%;
`

export const Table = (props: TableProps) => (<StyledTable {...props} />)
