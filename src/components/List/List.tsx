import * as React from 'react'
import styled from 'styled-components'
import {underXs} from '../../styles'

export type ListProps = React.HTMLAttributes<HTMLUListElement>

const ListBase: React.FC<ListProps> = (props: ListProps) => (
  <ul {...props} />
)

/**
 * A simple styled `<ul>`
 *
 * https://chadlavi.github.io/clear/#/list#list
 */
export const List = styled(ListBase)`
  padding-left: calc(var(--clear-unit) * 5);
  padding-inline-start: calc(var(--clear-unit) * 5);
  ${underXs(`
    padding-left: calc(var(--clear-unit) * 3);
    padding-inline-start: calc(var(--clear-unit) * 3);
  `)}
`
