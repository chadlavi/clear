import * as React from 'react'
import {Button} from '../Button'
import styled from 'styled-components'

const jumpTo = (id: string) => (): void => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView()
    el.focus()
  }
}

const SkipLinkButton = styled(Button)`
  position: absolute;
  top: var(--clear-unit);
  left: var(--clear-unit);
  opacity: 0;
  pointer-events: none;
  user-select: none;
  :focus {
    opacity: 1;
    pointer-events: unset;
    user-select: unset;
  }
  
`

export const SkipLink: React.FC<{id: string}> = ({id}) => (
  <SkipLinkButton
    onClick={jumpTo(id)}
    primary
  >
      Skip to main content
  </SkipLinkButton>
)
