import styled from 'styled-components'

/**
 * A simple styled `<code>`
 * 
 * https://chadlavi.github.io/clear/#/text
 */
export const Code = styled('code')`
  font-size: 0.9em;
  display: inline;
  margin: 0;
  background: var(--clear-zebra);
  padding: calc(var(--clear-unit) / 2 - 2px) calc(var(--clear-unit) / 2 - 1px);
  border-radius: calc(var(--clear-unit) / 2);
`