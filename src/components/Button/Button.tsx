import * as React from 'react'
import {focusStyle} from '../../styles'
import styled from 'styled-components'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * if true, the `<Button>` is disabled
   */
  disabled?: boolean
  /**
   * if true, the `<Button>` is styled as a primary call to action button
   */
  primary?: boolean
}

const ButtonBase = ({primary, ...props}: ButtonProps): JSX.Element => (
  <button
    {...props}
    className={`${props.className}${primary ? ' primary' : ''}${props.disabled ? ' disabled' : ''}`}
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
  cursor: pointer;
  ${(p): string => p.disabled ? `
    cursor: not-allowed;
    opacity: 0.5;
  ` : ''};
  font-size: var(--clear-font-size-label);
  margin: 0;
  padding: var(--clear-unit) calc(var(--clear-unit) * 2);
  @media (prefers-color-scheme: dark) {
    font-weight: 500;
  }
  ${focusStyle}
`
