import { createGlobalStyle } from 'styled-components'
import { colors, numbers } from '..'

/**
 * Creates a set of css variables necessary for global colors. This component
 * should be included once at the top level of your application.
 * 
 * https://chadlavi.github.io/clear/#/global-styles
 */
export const CSSVariables = createGlobalStyle`
  :root {
    --clear-background: ${colors.light.background};
    --clear-border: ${colors.light.border};
    --clear-error: ${colors.light.error};
    --clear-link: ${colors.light.link};
    --clear-text-color: ${colors.light.textColor};
    --clear-zebra: ${colors.light.zebra};
    --clear-unit: ${numbers.unit}px;
    --clear-font-size-default: ${numbers.fontSize.default}px;
    --clear-font-size-label: ${numbers.fontSize.label}px;
    --clear-font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    --clear-monospace-font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --clear-background: ${colors.dark.background};
      --clear-border: ${colors.dark.border};
      --clear-error: ${colors.dark.error};
      --clear-link: ${colors.dark.link};
      --clear-text-color: ${colors.dark.textColor};
      --clear-zebra: ${colors.dark.zebra};
    }
  }
  `

  /**
   * Applies styles to the `<body>` of your app.
   * 
   * https://chadlavi.github.io/clear/#/global-styles
   */
  export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: var(--clear-background);
    color: var(--clear-text-color);
    font-family: var(--clear-font-family);
    font-size: var(--clear-font-size-default);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
