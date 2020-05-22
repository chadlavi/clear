import * as React from 'react'
import styled from 'styled-components'
import {errorFocusStyle, focusStyle} from '../../styles'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * if true, the `<Input>` is shown with error styling
   */
  error?: boolean
}

/**
 * Calls props.onClick, but also selects the contents of the Input on click
 * @param func the onClick passed to `<Input>`
 */
const forwardOnClick = (
  func?: (e: React.MouseEvent<HTMLInputElement>) => void
) => (e: React.MouseEvent<HTMLInputElement>): void => {
  const t = e.currentTarget
  if (func) func(e)
  if (t.value) setTimeout(() => {
    t.select()
  }, 1)
}


/**
 * Calls props.onFocus, but also selects the contents of the Input on focus
 * @param func the onFocus passed to `<Input>`
 */
const forwardOnFocus = (
  func?: (e: React.FocusEvent<HTMLInputElement>) => void
) => (e: React.FocusEvent<HTMLInputElement>): void => {
  const t = e.currentTarget
  if (func) func(e)
  if (t.value) setTimeout(() => {
    t.select()
  }, 1)
}

const InputBase: React.FC<InputProps> = ({error, ...props}) => (
  <input
    {...props}
    onClick={forwardOnClick(props.onClick)}
    onFocus={forwardOnFocus(props.onFocus)}
    value={props.value || (props.type === 'number' ? ' ' : '')}
    className={`${props.className}${error ? ' error' : ''}`}
  />
)

/**
 * A simple styled Input
 *
 * https://chadlavi.github.io/clear/#/input#input
 */
export const Input = styled(InputBase)`
  background-color: var(--clear-background);
  color: var(--clear-${(p): string => p.error ? 'error' : 'textColor'});
  border: 1px solid var(--clear-${(p): string => p.error ? 'error' : 'border'});
  border-radius: var(--clear-unit);
  padding: calc(var(--clear-unit) * 1.5);
  font-size: var(--clear-font-size-default);
  margin: calc(var(--clear-unit) / 2) 0;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  -webkit-appearance: none;
  ${focusStyle}
  ${(p): string => p.error ? errorFocusStyle : ''}
  ${(p): string => p.disabled ? 'cursor: not-allowed;' : ''}
`
