import * as React from 'react'
import {focusStyle} from '../../styles'
import styled from 'styled-components'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * if true, the button is disabled
   */
  disabled?: boolean
  /**
   * if true, the button is styled as a primary call to action button
   */
  primary?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ButtonBase = ({primary, ...props}: ButtonProps): JSX.Element => <button {...props}/>

/**
 * A simple styled `<button>`
 *
 * https://chadlavi.github.io/clear/#/button
 */
export const Button = styled(ButtonBase)`
  background: var(--clear-border);
  border-radius: var(--clear-unit);
  border: none;
  color: inherit;
  ${(p): string => p.primary ? `
    background: var(--clear-link);
    color: var(--clear-background);
  ` : ''};
  cursor: pointer;
  ${(p): string => p.disabled ? `
    cursor: not-allowed;
    opacity: 0.5;
  ` : `
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 1px rgba(0, 0, 0, .08);
    :active {
      box-shadow: 0 24px 13px 5px rgba(0, 0, 0, 0.15) inset !important;
    }
  `};
  font-size: var(--clear-font-size-label);
  margin: 0;
  padding: var(--clear-unit) calc(var(--clear-unit) * 2);
  @media (prefers-color-scheme: dark) {
    font-weight: 500;
  }
  ${focusStyle}
`
