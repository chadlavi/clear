import * as React from 'react';
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Space between grid items (in pixels)
     */
    spacing?: number;
}
export declare const Grid: (props: GridProps) => JSX.Element;
