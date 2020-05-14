import * as React from 'react'
import styled from 'styled-components'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * if true, the `<Label>` is shown with disabled styling
   */
  disabled?: boolean
  /**
   * if true, the `<Label>` is shown with error styling
   */
  error?: boolean
  /**
   * if true, `<Label>` is visually marked as required. Should match the value of the `required` prop on the
   * corresponding form field
   */
  required?: boolean
}

const LabelBase = ({disabled: _disabled, error: _error, required, ...props}: LabelProps): JSX.Element => (
  <label
    {...props}
  >
    {required ? <>{props.children}{' (Required)'}</> : props.children}
  </label>
)

/**
 * A simple styled `<label>`
 *
 * https://chadlavi.github.io/clear/#/text#label
 */
export const Label = styled(LabelBase)`
  color: ${(p): string => p.error ? 'var(--clear-error)' : 'inherit'};
  ${(p): string  => p.disabled ? `
    opacity: 0.5;
  ` : ''};
  width: 100%;
  font-size: var(--clear-font-size-label);
`
