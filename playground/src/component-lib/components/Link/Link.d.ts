import * as React from 'react';
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
}
export declare const Link: (props: LinkProps) => JSX.Element;
