import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import { colors, numbers } from '../../styles'

export const CSSBaseline = createGlobalStyle`
  :root {
    --background: ${colors.light.background};
    --border: ${colors.light.background};
    --error: ${colors.light.error};
    --link: ${colors.light.link};
    --text-color: ${colors.light.textColor};
    --zebra: ${colors.light.zebra};
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: ${colors.dark.background};
      --border: ${colors.dark.border};
      --error: ${colors.dark.error};
      --link: ${colors.dark.link};
      --text-color: ${colors.dark.textColor};
      --zebra: ${colors.dark.zebra};
    }
  }

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--link);
  }

  body {
    margin: 0;
    background-color: var(--background);
    color: var(--text-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: ${numbers.fontSize.default}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
