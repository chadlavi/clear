import * as React from 'react';
interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    margins?: boolean;
}
/**
 * A simple styled `<p>`
 *
 * https://chadlavi.github.io/clear/#/text
 */
export declare const Paragraph: import("styled-components").StyledComponent<({ margins, ...props }: ParagraphProps) => JSX.Element, any, {}, never>;
export {};
