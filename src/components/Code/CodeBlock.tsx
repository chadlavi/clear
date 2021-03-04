import styled from '@emotion/styled'

/**
 * A simple styled `<pre>` for formatting code blocks
 *
 * https://chadlavi.github.io/clear/#/text#codeblock
 */
export const CodeBlock = styled.pre({
  fontFamily: 'var(--clear-monospace-font-family)',
  fontSize: '0.9em',
  lineHeight: 1.5,
  display: 'block',
  marginBlockEnd: 'calc(var(--clear-unit) * 2)',
  marginBlockStart: 'calc(var(--clear-unit) * 2)',
  background: 'var(--clear-zebra)',
  padding: 'calc(var(--clear-unit) * 2)',
  borderRadius: 'var(--clear-unit)',
  overflowX: 'auto',
})
