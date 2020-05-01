import {numbers} from '../../styles'
import styled from 'styled-components'

/**
 * A simple styled `<main>`
 *
 * https://chadlavi.github.io/clear/#/layout#page
 */
export const Page = styled('main')`
margin: 0 auto;
margin-bottom: calc(var(--clear-unit) * 15);
padding: var(--clear-unit);
width: ${numbers.width.main}px;
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
