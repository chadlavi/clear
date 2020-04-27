import * as React from 'react'
import styled from 'styled-components'
import { Link } from '../Link'

interface EmailProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * the email address
   */
  address: string
}

const EmailBase = ({address, ...props}: EmailProps) => (
  <Link
    {...props}
    title={`Send email to ${address}`}
    href={`mailto:${address}`}
    children={props.children || address}
  />
)

/**
 * A simple styled `<a>`
 * 
 * https://chadlavi.github.io/clear/#/link
 */
export const Email = styled(EmailBase)`
  &::after {
    content: ' [\u2709]';
  }
`