import {Breakpoint} from '../numbers'
import {Colors} from '../colors'
import {createGlobalStyle} from 'styled-components'
import {colors, numbers} from '..'

/**
 * Creates a set of css variables necessary for global colors. This component
 * should be included once at the top level of your application.
 *
 * https://chadlavi.github.io/clear/#/global-styles#cssvariables
 */
export const CSSVariables = createGlobalStyle`
  :root {
    ${(Object.keys(colors.light) as Colors[]).map((c) => `--clear-${c}: ${colors.light[c]};`)}

    --clear-unit: ${numbers.unit}px;
    --clear-main-width: ${numbers.width.main}px;
    --clear-font-size-default: ${numbers.fontSize.default}px;
    --clear-font-size-label: ${numbers.fontSize.label}px;

    ${(
      Object.keys(numbers.breakpoint) as Breakpoint[]).map((k) => `--clear-breakpoint-${k}: ${numbers.breakpoint[k]}px;`
  )}

    --clear-font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu,
      roboto, noto, segoe ui, arial, sans-serif;
    --clear-monospace-font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${(Object.keys(colors.dark) as Colors[]).map((c) => `--clear-${c}: ${colors.dark[c]};`)}
    }
  }
  `
