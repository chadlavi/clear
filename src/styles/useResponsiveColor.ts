import * as React from 'react'
import {Colors, colors} from '.'

export const useResponsiveColor = (color: Colors): string => {
  const [result, setResult] = React.useState(matchMedia('(prefers-color-scheme: dark)').matches)

  const callback = React.useCallback(
    (matchMediaResult) => setResult(matchMediaResult.matches),
    [setResult],
  )

  React.useEffect(
    function () {
      const matchMediaResult = matchMedia('(prefers-color-scheme: dark)')
      callback(matchMediaResult)
      matchMediaResult.addListener(callback)
      return function (): void { return matchMediaResult.removeListener(callback) }
    },
    [callback]
  )

  return colors[result ? 'dark' : 'light'][color]
}
