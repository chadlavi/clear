import * as React from 'react'
import {HashLink, HashLinkProps} from 'react-router-hash-link'
import {Link, uuid} from '../component-lib'

export const AccessibleHashlink = (props: HashLinkProps): JSX.Element => {
  const focusTarget = (): void => {
    const route = props.to
    if (typeof route === 'string') {
      const hashes = route.split('#')
      if (hashes.length > 1) {
        const id = hashes.pop()
        if (id) {
          const h = `#${id}`
          setTimeout(() => {
            const e = document.querySelector(h)
            const p = e?.parentElement
            if (p) {
              const a = document.createElement('span')
              const unique = uuid()
              a.setAttribute('id', `${h}-${unique}`)
              a.setAttribute('tabIndex', '0')
              p.insertBefore(a, e)
              a.focus()
              a.addEventListener('blur', () => {
                p.removeChild(a)
              })
            }
          }, 1)
        }
      } else {
        window.scrollTo({top: 0})
      }
    }
  }

  return (
    <Link
      as={HashLink}
      {...props}
      onClick={focusTarget}
    />
  )
}
