import * as React from 'react'
import styled from 'styled-components'

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  margins?: boolean
}

const ParagraphBase = ({margins, ...props}: ParagraphProps) => <p {...props} />

/**
 * A simple styled `<p>`
 * 
 * https://chadlavi.github.io/clear/#/text
 */
export const Paragraph = styled(ParagraphBase)`
  line-height: 1.5;
  ${p => p.margins === false ? '' : `
    margin-block-start: 1em;
    margin-block-end: 1em;
  `}
`
