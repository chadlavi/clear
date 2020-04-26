import * as React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    label?: string;
}
export declare const Input: (props: InputProps) => JSX.Element;
