import * as React from 'react'
import styled from 'styled-components'
import { numbers } from '../../../styles'

export type GridItemSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns (out of max 12) the `GridItem` should take up
   */
  size?: GridItemSize
}

const StyledDiv = (props: {children?: React.ReactNode, size: GridItemSize}) => {
  const Div = styled.div<GridItemProps>`
    display: flex;
    flex-basis: calc(100% * ${props.size} / 12);
    width: calc(100% * ${props.size} / 12);
    @media only screen and (max-width: ${numbers.breakpoint.xs}px) {
      flex-basis: 100%;
      width: 100%;
    }
  `
  return <Div>{props.children}</Div>
}

export const GridItem = (props: GridItemProps) => {
  const {
    children,
    size,
  } = props
  return (
    <StyledDiv size={size || 12}>
      {children}
    </StyledDiv>
  )
}
