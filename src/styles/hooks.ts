import * as React from 'react'
import {Themes} from './colors'
import {Breakpoint, numbers} from './numbers'
import {Colors, colors} from '.'

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

export const useBreakpoint = (
  breakpoint: Breakpoint
): boolean => useMediaQuery(`(max-width: ${numbers.breakpoint[breakpoint]}px)`)

export const useDarkMode = (): boolean => useMediaQuery('(prefers-color-scheme: dark)')

export const useResponsiveColor = (color: Colors): string => {
  const theme: Themes = useDarkMode() ? 'dark' : 'light'
  return colors[theme][color]
}
