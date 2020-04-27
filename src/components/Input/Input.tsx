import * as React from 'react'
import styled from 'styled-components'
import { focusStyle } from '../../styles'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  label?: string
}

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean
  error?: boolean
}

const Label = ({disabled, error, ...props}: LabelProps) => <label {...props} />

const StyledLabel = styled(Label)`
  color: ${p => p.error ? 'var(--clear-error)' : 'inherit'};
  display: flex;
  flex-direction: column;
  opacity: ${p => p.disabled ? 0.5 : 1};
  width: 100%;
  & > span {
    font-size: var(--clear-font-size-label);
  }
`

const InputBase = ({error, label, ...props}: InputProps) => <input {...props} />

const StyledInput = styled(InputBase)`
  background-color: var(--clear-background);
  color: var(--clear-${p => p.error ? 'error' : 'textColor'});
  border: 1px solid var(--clear-${p => p.error ? 'error' : 'border'});
  border-radius: var(--clear-unit);
  padding: calc(var(--clear-unit) * 1.5);
  font-size: inherit;
  margin: calc(var(--clear-unit) / 2) 0;
  width: 100%;
  -webkit-appearance: none;
  ${focusStyle}
  ${p => p.error && `
    :focus {
      box-shadow: 0 0 0 2px var(--clear-background), 0 0 0 4px var(--clear-error);
    }
  `}
`

export const Input = (props: InputProps) => {
  const {
    label,
    value,
    ...other
  } = props
  return (
    <StyledLabel
      disabled={other.disabled}
      error={other.error}
    >
      <span>
        {label}{other.required ? ' (Required)' : ''}
      </span>
      <StyledInput
        {...other}
        value={value || ' '}
      />
    </StyledLabel>
  )
}
