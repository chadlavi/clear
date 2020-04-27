import * as React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    label?: string;
}
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    disabled?: boolean;
    error?: boolean;
}
export declare const Input: (props: InputProps) => JSX.Element;
