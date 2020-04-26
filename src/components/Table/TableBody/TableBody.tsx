import * as React from 'react'
import styled from 'styled-components'

export interface TableBodyProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {}

const StyledTableBody = styled.tbody``

export const TableBody = (props: TableBodyProps) => (<StyledTableBody {...props} />)
