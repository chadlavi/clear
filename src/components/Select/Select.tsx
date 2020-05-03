import * as React from 'react'
import styled from 'styled-components'
import {uuid} from '../../utils'
import {errorFocusStyle, focusStyle} from '../../styles'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * if true, the `<Select>` is shown with error styling
   */
  error?: boolean
  /**
   * The string used to label the select
   */
  label?: string
  /**
   * Array of options. Each option has a label and a value.
   */
  options: {label: string; value: string | number | string[]}[]
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectBase = ({error, label, ...props}: Omit<SelectProps, 'options'>): JSX.Element =>
  <select
    {...props}
  />


const StyledSelect = styled(SelectBase)`
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

const SelectOptions = ({options}: {options: SelectProps['options']}): JSX.Element => (
  <>
    {options.map((o) => (
      <option key={`${o.label}:${o.value}`} value={o.value}>
        {o.label}
      </option>
    ))}
  </>
)

/**
 * A simple styled Select
 *
 * https://chadlavi.github.io/clear/#/input#select
 */
export const Select = (props: SelectProps): JSX.Element => {
  const {
    id,
    label,
    multiple,
    options,
    ...other
  } = props

  const forwardID = id || uuid()
  return (
    <StyledLabel
      className={other.className}
      disabled={other.disabled}
      error={other.error}
      htmlFor={forwardID}
    >
      <span>
        {label}{other.required ? ' (Required)' : ''}
      </span>
      <StyledSelect
        {...other}
        id={forwardID}
        defaultValue={multiple ? undefined : ''}
        multiple={multiple}
      >
        {multiple ? '' : <option hidden disabled value=''></option>}
        <SelectOptions options={options} />
      </StyledSelect>
    </StyledLabel>
  )
}

type Setter = React.Dispatch<React.SetStateAction<string[] | undefined>>
type SelectChange = React.ChangeEvent<HTMLSelectElement>

/**
 * handles update logic to update the value of a `<Select>` with `multiple={true}`
 *
 * Requires two arguments, a value to update and a function to set it. Defaults to
 * expecting a React `useState` hook, but you can optionally specify a type for the
 * setter function.
 */
export const handleMultiSelectChange = <S extends Function = Setter>(
  value: string[] | undefined, setter: S
) => (
    e: SelectChange
  ): void => {
    const v = e.currentTarget.value
    if (value && value.length > 0) {
      const index = value.indexOf(v)
      if (index >= 0) {
        const newValue = value.filter((opt) => opt !== v)
        setter(newValue)
      } else {
        setter([...value, v])
      }
    } else {
      setter([v])
    }
  }
