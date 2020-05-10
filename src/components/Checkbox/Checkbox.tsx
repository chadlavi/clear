import * as React from 'react'
import styled from 'styled-components'
import {errorFocusStyle, focusStyle} from '../../styles'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  label?: string
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin: var(--clear-unit);
`

const InputWrapper = styled.div`
  display: block;
  height: var(--clear-font-size-label);
  width: var(--clear-font-size-label);
  position: relative;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InputBase = ({error, label, ...props}: CheckboxProps): JSX.Element => (
  <input
    {...props}
    type={'checkbox'}
  />
)

const StyledInput = styled(InputBase)`
  -webkit-appearance: none;
  background: var(--clear-${(p): string => p.checked ? (p.error ? 'error' : 'link') : 'background'});
  border-radius: calc(var(--clear-unit) / 4);
  border: 1px solid var(--clear-${(p): string => p.error ? 'error' : (p.checked ? 'link' : 'textColor')});
  display: block;
  height: var(--clear-font-size-label);
  margin: 0;
  width: var(--clear-font-size-label);
  opacity: ${(p): string => p.disabled ? '0.5' : '1'};
  cursor: ${(p): string => p.disabled ? 'not-allowed' : 'pointer'};
  ${focusStyle}
  ${(p): string => p.error ? errorFocusStyle : ''}
`

interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  checked?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SVGBase = ({checked, ...props}: IconProps): JSX.Element => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    x='0'
    y='0'
    {...props}
  />
)

const Icon = styled(SVGBase)`
  fill: none;
  stroke: var(--clear-background);
  stroke-width: calc(var(--clear-unit) / 4 + 1px);
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  display: ${(p): string => p.checked ? 'block' : 'none'}
`

interface LabelBaseProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean
  error?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LabelBase = ({disabled, error, ...props}: LabelBaseProps): JSX.Element => (
  <label
    {...props}
  />
)

const StyledLabel = styled(LabelBase)`
  ${(p): string => p.error ? 'color: var(--clear-error)' : ''};
  opacity: ${(p): string => p.disabled ? '0.5' : '1'};
  cursor: ${(p): string => p.disabled ? 'not-allowed' : 'pointer'};
  margin-left: var(--clear-unit);
`

export const Checkbox = (props: CheckboxProps): JSX.Element => {
  const {
    error,
    label,
    ...other
  } = props
  return (
    <Wrapper>
      <InputWrapper>
        <StyledInput
          error={error}
          {...other}
        />
        <Icon
          checked={other.checked}
          viewBox='0 0 24 24'
        >
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </InputWrapper>
      {label &&
        <StyledLabel
          disabled={other.disabled}
          error={error}
          htmlFor={other.id}
        >
          {label}
        </StyledLabel>
      }
    </Wrapper>
  )
}
