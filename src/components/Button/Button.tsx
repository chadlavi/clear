import * as React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import {errorFocusStyleJSS, focusStyleJSS} from '../../styles'

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
      classNames(
        props.className,
        destructive && 'destructive',
        primary && 'primary',
        props.disabled && 'disabled'
      )
    }
  />
)

const primaryStyle = {
  background: 'var(--clear-link)',
  border: '1px solid var(--clear-link)',
  color: 'var(--clear-background)',
}

const destructiveStyle = {
  background: 'var(--clear-red)',
  border: '1px solid var(--clear-red)',
  color: 'var(--clear-background)',
}

const disabledStyle = {
  cursor: 'not-allowed',
  opacity: 0.5,
}

/**
 * A simple styled `<button>`
 *
 * https://chadlavi.github.io/clear/#/button
 */
export const Button = styled(ButtonBase)(({destructive, disabled, primary}: ButtonProps) => ({
  background: 'var(--clear-border)',
  borderRadius: 'var(--clear-unit)',
  border: '1px solid var(--clear-border)',
  color: 'var(--clear-textColor)',
  cursor: 'pointer',
  fontSize: 'var(--clear-font-size-default)',
  marginBottom: 'calc(var(--clear-unit) / 2)',
  marginLeft: 0,
  marginRight: 0,
  marginTop: 'calc(var(--clear-unit) / 2)',
  padding: 'calc(var(--clear-unit) * 1.5) calc(var(--clear-unit) * 3)',
  ...(primary ? primaryStyle : {}),
  ...(destructive ? {...destructiveStyle, ...errorFocusStyleJSS} : focusStyleJSS),
  ...(disabled ? disabledStyle : {}),
}))
