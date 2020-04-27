import * as React from 'react';
interface EmailProps extends React.HTMLAttributes<HTMLAnchorElement> {
    /**
     * the email address
     */
    address: string;
}
/**
 * A simple styled `<a>`
 *
 * https://chadlavi.github.io/clear/#/link
 */
export declare const Email: import("styled-components").StyledComponent<({ address, ...props }: EmailProps) => JSX.Element, any, {}, never>;
export {};
