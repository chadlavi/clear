import * as React from 'react'
import styled from 'styled-components'
import { numbers } from '../../../styles'

export interface TdProps extends React.TableHTMLAttributes<HTMLTableCellElement> {}

const StyledTd = styled.td`
  text-align: left;
  padding: ${numbers.unit}px;
`

export const Td = (props: TdProps) => (<StyledTd {...props} />)
