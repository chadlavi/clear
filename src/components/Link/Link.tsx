import * as React from 'react'
import {focusStyle} from '../../styles'
import styled from 'styled-components'

const Anchor = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  const isExternal = Boolean(props.href?.match(/^http/))
  return (
    <a
      {...props}
      target={isExternal ? '_blank' : props.target}
      rel={isExternal ? 'noopener noreferrer' : props.rel}
      title={props.title || `Open "${props.href}"${isExternal ? ' in a new Tab' : ''}`}
    />
  )
}

/**
 * A simple styled `<a>`
 * 
 * https://chadlavi.github.io/clear/#/link
 */
export const Link = styled(Anchor)`
  color: var(--clear-link);
  ${focusStyle}
  &[target='_blank']::after {
    content: ' [\u2197]';
  }
`