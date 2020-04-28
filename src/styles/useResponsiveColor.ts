import * as React from 'react'
import {Themes} from './colors'
import {Colors, colors} from '.'

export const useDarkMode = (): boolean => {
  const [result, setResult] = React.useState(matchMedia('(prefers-color-scheme: dark)').matches)

  const callback = React.useCallback((matchMediaResult) => setResult(matchMediaResult.matches), [setResult])

  React.useEffect(() => {
    const matchMediaResult = matchMedia('(prefers-color-scheme: dark)')
    callback(matchMediaResult)
    matchMediaResult.addListener(callback)
    return (): void => matchMediaResult.removeListener(callback)
  }, [callback])

  return result
}

export const useResponsiveColor = (color: Colors): string => {
  const theme: Themes = useDarkMode() ? 'dark' : 'light'
  return colors[theme][color]
}
