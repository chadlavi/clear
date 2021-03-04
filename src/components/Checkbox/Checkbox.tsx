import * as React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import {errorFocusStyleJSS, focusStyleJSS} from '../../styles'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * if true, the `<Checkbox>` is shown with error styling
   */
  error?: boolean
  /**
   * The text to show in the `<Checkbox>`'s nested `<label>`
   */
  label?: string
}

const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
  margin: 'var(--clear-unit)',
})

const InputWrapper = styled.div({
  display: 'block',
  height: 'var(--clear-font-size-label)',
  width: 'var(--clear-font-size-label)',
  position: 'relative',
})

const InputBase: React.FC<CheckboxProps> = ({error, label: _label, ...props}) => (
  <input
    {...props}
    type={'checkbox'}
    className={classNames(props.className, error && 'error')}
  />
)

const StyledInput = styled(InputBase)(({error, checked,disabled}: CheckboxProps) => ({
  '-webkit-appearance': 'none',
  background: `var(--clear-${checked ? (error ? 'red' : 'link') : 'background'})`,
  borderRadius: 'calc(var(--clear-unit) / 4)',
  border: `1px solid var(--clear-${error ? 'red' : (checked ? 'link' : 'textColor')})`,
  display: 'block',
  height: 'var(--clear-font-size-label)',
  margin: 0,
  width: 'var(--clear-font-size-label)',
  opacity: `${disabled ? '0.5' : '1'}`,
  cursor: `${disabled ? 'not-allowed' : 'pointer'}`,
  ...focusStyleJSS,
  ...(error ? errorFocusStyleJSS: {}),
}))

interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  checked?: boolean
}

const SVGBase: React.FC<IconProps> = ({checked: _checked, ...props}) => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    x='0'
    y='0'
    {...props}
  />
)

const Icon = styled(SVGBase)(({checked}) => ({
  fill: 'none',
  stroke: 'var(--clear-background)',
  strokeWidth: 'calc(var(--clear-unit) / 4 + 1px)',
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  display: checked ? 'block' : 'none',
}))

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

const StyledLabel = styled(LabelBase)(({disabled, error}) => ({
  color: error ? 'var(--clear-red)' : undefined,
  opacity: disabled ? 0.5 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer',
  marginLeft: 'var(--clear-unit)',
}))

/**
 * A wrapper around HTML `<input type='checkbox'>`.
 *
 * https://chadlavi.github.io/clear/#/input#checkbox
 */
export const Checkbox: React.FC<CheckboxProps> = (props) => {
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
