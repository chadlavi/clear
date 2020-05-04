import * as React from 'react';
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /**
     * if true, the `<Label>` is shown with disabled styling
     */
    disabled?: boolean;
    /**
     * if true, the `<Label>` is shown with error styling
     */
    error?: boolean;
    /**
     * if true, `<Label>` is visually marked as required. Should match the value of the `required` prop on the
     * corresponding form field
     */
    required?: boolean;
}
/**
 * A simple styled `<label>`
 *
 * https://chadlavi.github.io/clear/#/text#label
 */
export declare const Label: import("styled-components").StyledComponent<({ disabled, error, required, ...props }: LabelProps) => JSX.Element, any, {}, never>;
export {};
