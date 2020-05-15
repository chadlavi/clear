import * as React from 'react'
import {Link} from './component-lib'
import {HashLink, HashLinkProps} from 'react-router-hash-link'

const jumpToID = (path: string): void => {
  const hashes = path.split('#')
  if (hashes.length > 1) {
    const id = hashes[hashes.length - 1]
    const h = `#${id}`
    setTimeout(() => {
      const e = document.querySelector(h)
      const p = e?.parentElement
      if (p) {
        const a = document.createElement('span')
        a.setAttribute('aria-hidden', 'true')
        a.setAttribute('tabIndex', '0')
        p.insertBefore(a, e)
        a.focus()
        a.addEventListener('blur', () => {
          p.removeChild(a)
        })
      }
    }, 1)
  } else {
    window.scrollTo({top: 0})
  }
}

const focusTarget = (to: HashLinkProps['to']) => (): void => {
  if (typeof to === 'string') {
    jumpToID(to)
  } else if (typeof to === 'object' && to.hash) {
    jumpToID(`#${to.hash}`)
  }
}

export const AccessibleHashlink = (props: HashLinkProps): JSX.Element => (
  <Link
    as={HashLink}
    {...props}
    onClick={focusTarget(props.to)}
  />
)
