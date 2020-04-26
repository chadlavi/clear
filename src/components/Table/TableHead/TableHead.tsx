import * as React from 'react'
import styled from 'styled-components'

interface TableHeadProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {}

const StyledTableHead = styled.thead``

export const TableHead = (props: TableHeadProps) => (<StyledTableHead {...props} />)
