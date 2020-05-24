import * as React from 'react'

/**
 * A React hook to listen for clickaway and run a callback function when it happens.
 *
 * Use this hook to set the value of a React `ref` prop.
 *
 * @param onClickAway Callback function to run when clickaway happens
 * @param shouldListen Optional boolean switch to prevent listening
 */
export function useClickaway<T extends Node>(onClickAway: () => void, shouldListen?: boolean): React.RefObject<T> {

  const ref = React.useRef<T>(null)

  const handleClickOutside = (event: Event): void => {
    if (event.target) {
      if (ref.current) {
        if (!ref.current.contains(event.target as Node)) {
          onClickAway()
        }
      }
    }
  }

  React.useEffect(() => {
    if (shouldListen !== false) {
      document.addEventListener('click', handleClickOutside, true)
      return (): void => {
        document.removeEventListener('click', handleClickOutside, true)
      }
    }
  })

  return ref
}
