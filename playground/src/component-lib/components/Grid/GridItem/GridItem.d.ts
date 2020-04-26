import * as React from 'react';
export declare type GridItemSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Number of columns (out of max 12) the `GridItem` should take up
     */
    size?: GridItemSize;
}
export declare const GridItem: (props: GridItemProps) => JSX.Element;
