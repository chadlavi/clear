import * as React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * if true, the `<Input>` is shown with error styling
     */
    error?: boolean;
}
/**
 * A simple styled Input
 *
 * https://chadlavi.github.io/clear/#/input#input
 */
export declare const Input: import("styled-components").StyledComponent<({ error, ...props }: InputProps) => JSX.Element, any, {}, never>;
