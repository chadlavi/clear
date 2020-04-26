import * as React from 'react'
import styled from 'styled-components'
import { numbers } from '../../../styles'

export interface TrProps extends React.TableHTMLAttributes<HTMLTableRowElement> {}

const StyledTr = styled.tr`
  &:nth-child(even) td {
    background-color: var(--zebra);
  }
  &:nth-child(even) td:first-child {
    border-radius: ${numbers.unit}px 0 0 ${numbers.unit}px;
  }
  &:nth-child(even) td:last-child {
    border-radius: 0 ${numbers.unit}px ${numbers.unit}px 0;
  }
`

export const Tr = (props: TrProps) => (<StyledTr {...props} />)
