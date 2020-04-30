import * as React from 'react';
export interface ScrollContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    contentMinHeight?: number | string;
    contentMinWidth?: number | string;
    direction: 'horizontal' | 'vertical';
    maxHeight?: number | string;
    maxWidth?: number | string;
}
export declare const ScrollContainer: (props: ScrollContainerProps) => JSX.Element;
