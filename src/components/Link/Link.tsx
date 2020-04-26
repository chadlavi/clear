import * as React from 'react'
import styled from 'styled-components'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean
}

const StyledLink = styled.a`
  color: var(--link);
  &[target='_blank']::after {
    content: ' [\\2197]';
  }
`

export const Link = (props: LinkProps) => {
  const {
    external,
    ...other
  } = props
  return (
    <StyledLink
      {...other}
      target={external ? '_blank' : other.target}
      title={other.title || other.href}
    />
  )
}