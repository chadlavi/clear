import * as React from 'react'
import styled from 'styled-components'
import {errorFocusStyle, focusStyle} from '../../styles'

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * if true, the `<Radio>` is shown with error styling
   */
  error?: boolean
  /**
   * The text to show in the `<Radio>`'s nested `<label>`
   */
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

const InputBase: React.FC<RadioProps> = ({error, label: _label, ...props}) => (
  <input
    {...props}
    type={'radio'}
    className={`${props.className}${error ? ' error' : ''}`}
  />
)

const StyledInput = styled(InputBase)`
  -webkit-appearance: none;
  background: var(--clear-${(p): string => p.checked ? (p.error ? 'red' : 'link') : 'background'});
  border-radius: var(--clear-font-size-label);
  border: 1px solid var(--clear-${(p): string => p.error ? 'red' : (p.checked ? 'link' : 'textColor')});
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
  width: calc(var(--clear-font-size-label) * 10);
  height: calc(var(--clear-font-size-label) * 10);
  transform-origin: top left;
  padding: 20px;
  transform: scale(0.1);
  svg {
    width: 100%;
    height: 100%;
  }
`

const SVGBase: React.FC<IconProps> = ({checked: _checked, ...props}) => (
  <SVGContainer>
    <div>
      <svg viewBox='0 0 100 100' {...props}>
        <circle
          cx='50'
          cy='50'
          r='40'
          stroke='var(--clear-background)'
          fill='none'
          strokeWidth='20'
        />
      </svg>
    </div>
  </SVGContainer>
)

const Icon = styled(SVGBase)`
  display: ${(p): string => p.checked ? 'block' : 'none'}
`

interface LabelBaseProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean
  error?: boolean
}

const LabelBase: React.FC<LabelBaseProps> = ({disabled, error, ...props}) => (
  <label
    {...props}
    className={`${props.className}${error ? ' error' : ''}${disabled ? ' disabled' : ''}`}
  />
)

const StyledLabel = styled(LabelBase)`
  ${(p): string => p.error ? 'color: var(--clear-red)' : ''};
  opacity: ${(p): string => p.disabled ? '0.5' : '1'};
  cursor: ${(p): string => p.disabled ? 'not-allowed' : 'pointer'};
  margin-left: var(--clear-unit);
`

/**
 * A wrapper around HTML `<input type='radio'>`.
 *
 * https://chadlavi.github.io/clear/#/input#radio
 */
export const Radio: React.FC<RadioProps> = (props) => {
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
        />
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
