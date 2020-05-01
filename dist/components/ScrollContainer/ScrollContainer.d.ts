import * as React from 'react';
export interface ScrollContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    contentMinHeight?: number | string;
    contentMinWidth?: number | string;
    direction: 'horizontal' | 'vertical';
    maxHeight?: number | string;
    maxWidth?: number | string;
}
/**
 * You can use a ScrollContainer to create a verticall or horizontally scrollable div with content of a fixed minimum
 * height/width. Scroll containers are very convenient ways to prevent <Table>s from becoming unmanageable on
 * responsive devices.
 *
 * https://chadlavi.github.io/clear/#/layout#scrollcontainer
 */
export declare const ScrollContainer: (props: ScrollContainerProps) => JSX.Element;
