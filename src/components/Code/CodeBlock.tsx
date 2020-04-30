import styled from 'styled-components'

/**
 * A simple styled `<pre>` for formatting code blocks
 *
 * https://chadlavi.github.io/clear/#/text
 */
export const CodeBlock = styled('pre')`
  font-family: var(--clear-monospace-font-family);
  font-size: 0.9em;
  line-height: 1.5;
  display: block;
  margin-block-end: calc(var(--clear-unit) * 2);
  margin-block-start: calc(var(--clear-unit) * 2);
  background: var(--clear-zebra);
  padding: calc(var(--clear-unit) * 2);
  border-radius: var(--clear-unit);
  overflow-x: auto;
`
