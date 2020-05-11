import * as React from 'react'
import styled from 'styled-components'
import {errorFocusStyle, focusStyle} from '../../styles'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * if true, the `<Select>` is shown with error styling
   */
  error?: boolean
  /**
   * Array of options. Each option has a label and a value.
   */
  options: {label: string; value: string | number | string[]}[]
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectBase = ({error, ...props}: Omit<SelectProps, 'options'>): JSX.Element =>
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
  cursor: ${(p): string => p.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${(p): string => p.disabled ? '0.5' : '1'};
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
 * A simple styled HTML `<select>`
 *
 * https://chadlavi.github.io/clear/#/input#select
 */
export const Select = (props: SelectProps): JSX.Element => {
  const {
    multiple,
    options,
    ...other
  } = props

  return (
    <StyledSelect
      {...other}
      defaultValue={multiple ? undefined : ''}
      multiple={multiple}
    >
      {multiple ? '' : <option hidden disabled value=''></option>}
      <SelectOptions options={options} />
    </StyledSelect>
  )
}

type Setter = React.Dispatch<React.SetStateAction<string[] | undefined>>

/**
 * handles update logic to update the value of a `<Select>` with `multiple={true}`
 *
 * Requires one argument, the function to set the `<select>` value. Defaults to
 * expecting a React `useState` hook, but you can optionally specify a type for the
 * setter function.
 */
export const handleMutliSelectOnChange = <S extends Function = Setter>(
  setter: S
) => (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const updatedOptions = Array.from(e.target.options)
      .filter(option => option.selected)
      .map(x => x.value)
    setter(updatedOptions)
  }
