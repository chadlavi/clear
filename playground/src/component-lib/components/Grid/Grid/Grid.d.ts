import * as React from 'react';
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Space between grid items (in pixels)
     */
    spacing?: number;
}
/**
 * A simple 12-column grid container. Must be used in conjunciton with
 * `<GridItem>`.
 *
 * https://chadlavi.github.io/clear/#/grid
 */
export declare const Grid: import("styled-components").StyledComponent<({ spacing, ...props }: GridProps) => JSX.Element, any, GridProps, never>;
