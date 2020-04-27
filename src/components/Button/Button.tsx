import * as React from 'react'
import styled from 'styled-components'
import { focusStyle } from '../../styles'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  primary?: boolean
}

const ButtonBase = ({primary, ...props}: ButtonProps) => <button {...props}/>

export const Button = styled(ButtonBase)`
  background: var(--clear-border);
  border-radius: var(--clear-unit);
  border: none;
  color: inherit;
  ${p => p.primary && `
    background: var(--clear-link);
    color: var(--clear-background);
  `};
  cursor: pointer;
  ${p => p.disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `};
  font-size: var(--clear-font-size-label);
  margin: 0;
  padding: var(--clear-unit) calc(var(--clear-unit) * 2);
  ${focusStyle}
`
