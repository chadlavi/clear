import * as React from 'react'
import styled from 'styled-components'
import { numbers } from '../../styles'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  label?: string
}

const StyledLabel = styled.label<{disabled?: boolean, error?: boolean}>`
    color: ${p => p.error ? 'var(--error)' : 'inherit'};
    display: flex;
    flex-direction: column;
    opacity: ${p => p.disabled ? 0.5 : 1};
    width: 100%;
    & > span {
      font-size: ${numbers.fontSize.label}px;
    }
  `

const StyledInput = styled.input<{error?: boolean}>`
  background-color: var(--background);
  color: var(--${p => p.error ? 'error' : 'textColor'});
  border: 1px solid var(--${p => p.error ? 'error' : 'border'});
  border-radius: ${numbers.unit}px;
  padding: ${numbers.unit * 1.5}px;
  font-size: inherit;
  margin: ${numbers.unit / 2}px 0;
  width: 100%;
  -webkit-appearance: none;
`

export const Input = (props: InputProps) => {
  const {
    label,
    value,
    ...other
  } = props
  return (
    <StyledLabel disabled={other.disabled} error={other.error}>
      <span>{label}</span>
      <StyledInput
        {...other}
        value={value || ' '}
      />
    </StyledLabel>
  )
}
