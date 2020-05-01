import * as React from 'react'
import styled from 'styled-components'

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  margins?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ParagraphBase= ({margins, ...props}: ParagraphProps): JSX.Element => <p {...props} />

/**
 * A simple styled `<p>`
 *
 * https://chadlavi.github.io/clear/#/text#paragraph
 */
export const Paragraph = styled(ParagraphBase)`
  line-height: 1.5;
  ${(p): string => p.margins === false ? `
    margin-block-start: 0;
    margin-block-end: 0;
  ` : `
    margin-block-start: 1em;
    margin-block-end: 1em;
  `}
`
