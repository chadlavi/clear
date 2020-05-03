import * as React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * if true, the `<Input>` is shown with error styling
     */
    error?: boolean;
    /**
     * The string used to label the input
     */
    label?: string;
}
/**
 * A simple styled Input
 *
 * https://chadlavi.github.io/clear/#/input
 */
export declare const Input: (props: InputProps) => JSX.Element;
