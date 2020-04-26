import * as React from 'react'
import styled from 'styled-components'
import { GridItem } from '../GridItem'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Space between grid items (in pixels)
   */
  spacing?: number
}

const StyledDiv = styled.div<{spacing?: number}>`
    display: flex;
    flex-wrap: wrap;
    padding: ${p => p.spacing ? p.spacing / 2 : 0}px;
    & > div {
      padding: ${p => p.spacing ? p.spacing / 2 : 0}px;
    }
  `

export const Grid = (props: GridProps) => {
  const {} = props
  return (
    <StyledDiv {...props} />
  )
}
