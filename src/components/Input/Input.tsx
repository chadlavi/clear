import * as React from 'react'
import styled from 'styled-components'
import {errorFocusStyle, focusStyle} from '../../styles'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * if true, the `<Input>` is shown with error styling
   */
  error?: boolean
  /**
   * The string used to label the input
   */
  label?: string
}

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean
  error?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Label = ({disabled, error, ...props}: LabelProps): JSX.Element => <label {...props} />

const StyledLabel = styled(Label)`
  color: ${(p): string => p.error ? 'var(--clear-error)' : 'inherit'};
  display: flex;
  flex-direction: column;
  ${(p): string  => p.disabled ? `
    opacity: 0.5;
  ` : ''};
  width: 100%;
  & > span {
    font-size: var(--clear-font-size-label);
  }
`

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InputBase = ({error, label, ...props}: InputProps): JSX.Element =>
  <input
    {...props}
    onClick={forwardOnClick(props.onClick)}
    onFocus={forwardOnFocus(props.onFocus)}
  />


const StyledInput = styled(InputBase)`
  background-color: var(--clear-background);
  color: var(--clear-${(p): string => p.error ? 'error' : 'textColor'});
  border: 1px solid var(--clear-${(p): string => p.error ? 'error' : 'border'});
  border-radius: var(--clear-unit);
  padding: calc(var(--clear-unit) * 1.5);
  font-size: inherit;
  margin: calc(var(--clear-unit) / 2) 0;
  width: 100%;
  -webkit-appearance: none;
  ${focusStyle}
  ${(p): string => p.error ? errorFocusStyle : ''}
`

/**
 * A simple styled Input
 *
 * https://chadlavi.github.io/clear/#/input
 */
export const Input = (props: InputProps): JSX.Element => {
  const {
    label,
    value,
    ...other
  } = props
  return (
    <StyledLabel
      className={other.className}
      disabled={other.disabled}
      error={other.error}
    >
      <span>
        {label}{other.required ? ' (Required)' : ''}
      </span>
      <StyledInput
        {...other}
        value={value || (other.type === 'number' ? ' ' : '')}
      />
    </StyledLabel>
  )
}
