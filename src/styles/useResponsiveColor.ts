import * as React from 'react'
import { colors, Colors } from '.'

export const useResponsiveColor = (color: Colors) => {
  const [result, setResult] = React.useState(matchMedia('(prefers-color-scheme: dark)').matches)

  const callback = React.useCallback(
    (matchMediaResult) => setResult(matchMediaResult.matches),
    [setResult],
  )

  React.useEffect(
    function () {
      var matchMediaResult = matchMedia('(prefers-color-scheme: dark)')
      callback(matchMediaResult)
      matchMediaResult.addListener(callback)
      return function () { return matchMediaResult.removeListener(callback) }
    },
    [callback]
  )

  return colors[result ? 'dark' : 'light'][color]
}
