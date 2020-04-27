import * as React from 'react';
export declare type GridItemSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Number of columns (out of max 12) the `<GridItem>` should take up
     */
    size?: GridItemSize;
}
/**
 * A simple 12-column grid item. Must be used as a direct child of `<Grid>`.
 *
 * https://chadlavi.github.io/clear/#/grid
 */
export declare const GridItem: import("styled-components").StyledComponent<({ size, ...props }: GridItemProps) => JSX.Element, any, GridItemProps, never>;
