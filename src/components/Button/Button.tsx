import * as React from 'react'
import styled from 'styled-components'
import {errorFocusStyle, focusStyle} from '../../styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Set to true if the button performs a destructive action.
   */
  destructive?: boolean
  /**
   * if true, the `<Button>` is disabled
   */
  disabled?: boolean
  /**
   * if true, the `<Button>` is styled as a primary call to action button
   */
  primary?: boolean
}

const ButtonBase: React.FC<ButtonProps> = ({destructive, primary, ...props}) => (
  <button
    {...props}
    className={
      `${props.className}${
        destructive ? ' destructive' : ''
      }${
        primary ? ' primary' : ''
      }${
        props.disabled ? ' disabled' : ''
      }
      `}
  />
)

/**
 * A simple styled `<button>`
 *
 * https://chadlavi.github.io/clear/#/button
 */
export const Button = styled(ButtonBase)`
  background: var(--clear-border);
  border-radius: var(--clear-unit);
  border: none;
  color: var(--clear-textColor);
  ${(p): string => p.primary ? `
    background: var(--clear-link);
    color: var(--clear-background);
  ` : ''};
  ${(p): string => p.destructive ? `
    background: var(--clear-red);
    color: var(--clear-background);
  ` : ''};
  cursor: pointer;
  ${(p): string => p.disabled ? `
    cursor: not-allowed;
    opacity: 0.5;
  ` : ''};
  font-size: var(--clear-font-size-label);
  margin: 0;
  padding: var(--clear-unit) calc(var(--clear-unit) * 2);
  ${(p): string => p.destructive ? errorFocusStyle : focusStyle}
`
