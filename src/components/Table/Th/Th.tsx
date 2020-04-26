import * as React from 'react'
import styled from 'styled-components'

interface ThProps extends React.TableHTMLAttributes<HTMLTableHeaderCellElement> {}

const StyledTh = styled.th`
  font-weight: normal;
  font-size: 0.8rem;
  padding-bottom: 0;
  text-align: left;
  padding: 8px;
`

export const Th = (props: ThProps) => (<StyledTh {...props} />)
