import * as React from 'react'
import {GridItem} from '../GridItem'
import styled from 'styled-components'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Space between grid items (in pixels)
   */
  spacing?: number
}

const Container: React.FC = ({spacing: _spacing, ...props}: GridProps) => <div {...props} />

/**
 * A simple 12-column grid container. Must be used in conjunciton with
 * `<GridItem>`.
 *
 * https://chadlavi.github.io/clear/#/layout#grid
 */
export const Grid = styled(Container)<GridProps>`
  display: flex;
  flex-wrap: wrap;
  padding: ${(p): number => p.spacing ? p.spacing / 2 : 0}px;
  & > ${GridItem} {
    padding: ${(p): number => p.spacing ? p.spacing / 2 : 0}px;
  }
`
