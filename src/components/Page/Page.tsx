import * as React from 'react'
import styled from 'styled-components'
import {Width, numbers} from '../../styles'

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Width
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PageBase = ({size, ...props}: PageProps): JSX.Element => (
  <main {...props} />
)

/**
 * A simple styled `<main>`
 *
 * https://chadlavi.github.io/clear/#/layout#page
 */
export const Page = styled(PageBase)`
margin: 0 auto;
margin-bottom: calc(var(--clear-unit) * 15);
padding: var(--clear-unit);
width: ${(p): number => numbers.width[p.size ?? 'main']}px;
background-color: var(--clear-background);
color: var(--clear-textColor);
font-family: var(--clear-font-family);
font-size: var(--clear-font-size-default);
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
max-width: 100%;
&, & * {
  box-sizing: border-box;
}
`
