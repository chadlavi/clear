import * as React from 'react';
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * if true, the button is disabled
     */
    disabled?: boolean;
    /**
     * if true, the button is styled as a primary call to action button
     */
    primary?: boolean;
}
/**
 * A simple styled `<button>`
 *
 * https://chadlavi.github.io/clear/#/button
 */
export declare const Button: import("styled-components").StyledComponent<({ primary, ...props }: ButtonProps) => JSX.Element, any, {}, never>;
