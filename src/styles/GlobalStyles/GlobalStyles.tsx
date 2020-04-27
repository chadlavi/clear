import { createGlobalStyle } from 'styled-components'
import { colors, numbers } from '..'

/**
 * Creates a set of css variables for global colors and sets body style and 
 * all-element focus style
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
  export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: var(--clear-background);
    color: var(--clear-text-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: var(--clear-font-size-default);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
