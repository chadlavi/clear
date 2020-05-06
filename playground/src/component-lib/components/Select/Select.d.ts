import * as React from 'react';
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    /**
     * if true, the `<Select>` is shown with error styling
     */
    error?: boolean;
    /**
     * Array of options. Each option has a label and a value.
     */
    options: {
        label: string;
        value: string | number | string[];
    }[];
}
/**
 * A simple styled Select
 *
 * https://chadlavi.github.io/clear/#/input#select
 */
export declare const Select: (props: SelectProps) => JSX.Element;
declare type SelectChange = React.ChangeEvent<HTMLSelectElement>;
/**
 * handles update logic to update the value of a `<Select>` with `multiple={true}`
 *
 * Requires two arguments, a value to update and a function to set it. Defaults to
 * expecting a React `useState` hook, but you can optionally specify a type for the
 * setter function.
 */
export declare const handleMultiSelectChange: <S extends Function = React.Dispatch<React.SetStateAction<string[] | undefined>>>(value: string[] | undefined, setter: S) => (e: SelectChange) => void;
export {};
