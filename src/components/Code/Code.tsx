import styled from 'styled-components'

/**
 * A simple styled `<code>`
 *
 * https://chadlavi.github.io/clear/#/text#code
 */
export const Code = styled('code')`
  font-family: var(--clear-monospace-font-family);
  font-size: 0.9em;
  display: inline;
  margin: 0;
  background: var(--clear-zebra);
  padding: calc(1em / 8) calc(1em / 8 + 1px);
  border-radius: calc(1em / 4);
`
