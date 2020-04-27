import * as React from 'react'
import styled from 'styled-components'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Space between grid items (in pixels)
   */
  spacing?: number
}

const Container = ({spacing, ...props}: GridProps) => <div {...props} />

/**
 * A simple 12-column grid container. Must be used in conjunciton with
 * `<GridItem>`.
 * 
 * https://chadlavi.github.io/clear/#/grid
 */
export const Grid = styled(Container)<GridProps>`
  display: flex;
  flex-wrap: wrap;
  padding: ${p => p.spacing ? (p.spacing / 2) : 0}px;
  & > div {
    padding: ${p => p.spacing ? p.spacing / 2 : 0}px;
  }
`
