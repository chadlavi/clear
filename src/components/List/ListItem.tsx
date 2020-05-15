import * as React from 'react'
import styled from 'styled-components'

export type ListItemProps = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

const ListItemBase: React.FC<ListItemProps> = (props: ListItemProps) => (
  <li {...props} />
)


/**
 * A simple styled `<li>`
 *
 * https://chadlavi.github.io/clear/#/list#listitem
 */
export const ListItem = styled(ListItemBase)`
  line-height: 1.25;
`
