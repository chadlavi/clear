import * as React from 'react';
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Space between grid items (in pixels)
     */
    spacing?: number;
}
export declare const Grid: import("styled-components").StyledComponent<({ spacing, ...props }: GridProps) => JSX.Element, any, GridProps, never>;
