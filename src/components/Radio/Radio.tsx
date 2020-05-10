import * as React from 'react'
import styled from 'styled-components'
import {errorFocusStyle, focusStyle} from '../../styles'

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
const InputBase = ({error, label, ...props}: RadioProps): JSX.Element => (
  <input
    {...props}
    type={'radio'}
  />
)

const StyledInput = styled(InputBase)`
  -webkit-appearance: none;
  background: var(--clear-${(p): string => p.checked ? (p.error ? 'error' : 'link') : 'background'});
  border-radius: var(--clear-font-size-label);
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

const SVGContainer = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SVGBase = ({checked, ...props}: IconProps): JSX.Element => (
  <SVGContainer>
    <object width='100%' height='100%'>
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        x='0'
        y='0'
        viewBox='0 0 14 14'
        fill='none'
        stroke='var(--clear-background)'
        strokeWidth='calc(var(--clear-unit) / 4)'
        preserveAspectRatio='xMinyMin none'
        {...props}
      />
    </object>
  </SVGContainer>
)

const Icon = styled(SVGBase)`
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

export const Radio = (props: RadioProps): JSX.Element => {
  const {
    error,
    label,
    ...other
  } = props
  return (
    <Wrapper role={'radio'}>
      <InputWrapper role={'radio'}>
        <StyledInput
          error={error}
          tabIndex={0}
          {...other}
        />
        <Icon
          checked={other.checked}
        >
          <g transform='translate(7, 7)'>
            <circle cx='0' cy='0' r='5' />
          </g>
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
