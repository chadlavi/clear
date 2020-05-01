import {createGlobalStyle} from 'styled-components'

/**
 * Applies styles to the `<body>` of your app.
 *
 * https://chadlavi.github.io/clear/#/global-styles#globalstyles
 */
export const GlobalStyles= createGlobalStyle`
  body {
    margin: 0;
    background-color: var(--clear-background);
    color: var(--clear-textColor);
    font-family: var(--clear-font-family);
    font-size: var(--clear-font-size-default);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
