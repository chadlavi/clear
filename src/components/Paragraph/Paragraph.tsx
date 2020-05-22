import * as React from 'react'
import styled from 'styled-components'

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  margins?: boolean
}

const ParagraphBase: React.FC<ParagraphProps> = ({margins: _margins, ...props}) => <p {...props} />

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
