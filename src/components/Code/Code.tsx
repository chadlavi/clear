import styled from '@emotion/styled'

/**
 * A simple styled `<code>`
 *
 * https://chadlavi.github.io/clear/#/text#code
 */
export const Code = styled.code({
  fontFamily: 'var(--clear-monospace-font-family)',
  fontSize: '0.9em',
  display: 'inline',
  margin: 0,
  background: 'var(--clear-zebra)',
  padding: 'calc(1em / 8) calc(1em / 8 + 1px)',
  borderRadius: 'calc(1em / 4)',
})
