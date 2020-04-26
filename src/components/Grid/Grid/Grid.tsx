import * as React from 'react'
import styled from 'styled-components'
import { GridItem } from '../GridItem'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Space between grid items (in pixels)
   */
  spacing?: number
}

const StyledDiv = (props: {children?: React.ReactNode, spacing?: number}) => {
  const Div = styled.div<GridProps>`
    display: flex;
    flex-wrap: wrap;
    padding: ${props.spacing ? props.spacing / 2 : 0}px;
    & > div {
      padding: ${props.spacing ? props.spacing / 2 : 0}px;
    }
  `
  return <Div>{props.children}</Div>
}

export const Grid = (props: GridProps) => {
  const {} = props
  return (
    <StyledDiv {...props} />
  )
}
