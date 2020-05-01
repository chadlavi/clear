import * as React from 'react'
import {Breakpoint, numbers} from './numbers'
import {Colors, Themes, colors} from './colors'

/**
 * This basic React hook returns a boolean value that reflects whether or not the given query matches.
 *
 * https://chadlavi.github.io/clear/#/helpers#usemediaquery
 */
export const useMediaQuery = (query: string): boolean => {
  const [result, setResult] = React.useState(matchMedia(query).matches)

  const callback = React.useCallback((matchMediaResult) => setResult(matchMediaResult.matches), [setResult])

  React.useEffect(() => {
    const matchMediaResult = matchMedia(query)
    callback(matchMediaResult)
    matchMediaResult.addListener(callback)
    return (): void => matchMediaResult.removeListener(callback)
  }, [callback])

  return result
}

/**
 * Returns a boolean value that reflects whether or not the user's viewport is smaller than the given breakpoint.
 *
 * https://chadlavi.github.io/clear/#/helpers#usebreakpoint
 */
export const useBreakpoint = (
  breakpoint: Breakpoint
): boolean => useMediaQuery(`(max-width: ${numbers.breakpoint[breakpoint]}px)`)

/**
 * Returns a boolean value that reflects whether or not the user's browser is currently in dark mode.
 *
 * https://chadlavi.github.io/clear/#/helpers#usedarkmode
 */
export const useDarkMode = (): boolean => useMediaQuery('(prefers-color-scheme: dark)')

/**
 * Returns a boolean value that reflects whether or not the user's browser is currently in dark mode.
 *
 * https://chadlavi.github.io/clear/#/helpers#useresponsivecolor
 */
export const useResponsiveColor = (color: Colors): string => {
  const theme: Themes = useDarkMode() ? 'dark' : 'light'
  return colors[theme][color]
}
