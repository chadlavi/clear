import * as React from 'react'
import styled from 'styled-components'
import { numbers } from '../../styles'

const StyledPage = styled.main`
margin: 0 auto;
padding: ${numbers.unit}px;
width: ${numbers.width.main}px;
max-width: 100%;
`

export const Page = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledPage {...props} />
)
