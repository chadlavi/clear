import * as React from 'react';
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    primary?: boolean;
}
export declare const Button: import("styled-components").StyledComponent<({ primary, ...props }: ButtonProps) => JSX.Element, any, {}, never>;
