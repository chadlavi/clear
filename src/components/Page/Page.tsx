import styled from 'styled-components'
import { numbers } from '../../styles'

/**
 * A simple styled `<main>`
 * 
 * https://chadlavi.github.io/clear/#/layout
 */
export const Page = styled('main')`
margin: 0 auto;
margin-bottom: calc(var(--clear-unit) * 15);
padding: var(--clear-unit);
width: ${numbers.width.main}px;
background-color: var(--clear-background);
color: var(--clear-text-color);
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
font-size: var(--clear-font-size-default);
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
max-width: 100%;
&, & * {
  box-sizing: border-box;
}
`
