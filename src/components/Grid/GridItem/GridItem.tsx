import * as React from 'react'
import {numbers} from '../../../styles'
import styled from 'styled-components'

export type GridItemSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns (out of max 12) the `<GridItem>` should take up
   */
  size?: GridItemSize
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Container: React.FC = ({size, ...props}: GridItemProps) => <div {...props} />

/**
 * A simple 12-column grid item. Must be used as a direct child of `<Grid>`.
 *
 * https://chadlavi.github.io/clear/#/layout#griditem
 */
export const GridItem = styled(Container)<GridItemProps>`
  flex-basis: calc(100% * ${(p): number => p.size || 12} / 12);
  width: calc(100% * ${(p): number => p.size || 12} / 12);
  max-width: calc(100% * ${(p): number => p.size || 12} / 12);
  @media only screen and (max-width: ${numbers.breakpoint.xs}px) {
    flex-basis: 100%;
    width: 100%;
    max-width: 100%;
  }
`
