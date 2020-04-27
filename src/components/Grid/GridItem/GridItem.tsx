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

const Container = ({size, ...props}: GridItemProps) => <div {...props} />

export const GridItem = styled(Container)<GridItemProps>`
  flex-basis: calc(100% * ${p => p.size || 12} / 12);
  width: calc(100% * ${p => p.size || 12} / 12);
  @media only screen and (max-width: ${numbers.breakpoint.xs}px) {
    flex-basis: 100%;
    width: 100%;
  }
`
