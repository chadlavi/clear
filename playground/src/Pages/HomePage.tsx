import * as React from 'react'
import {
  Code,
  Header,
  Link,
  Paragraph,
} from '../component-lib'

export const HomePage: React.FC = () => (
  <>
    <Header>Clear</Header>
    <Paragraph>
      <Link href={'https://github.com/chadlavi/clear'}>Clear</Link> is a simple personal Design System for TypeScript
      React apps created by <Link href={'https://github.com/chadlavi'}>Chad Lavimoniere</Link>.
    </Paragraph>
    <Paragraph>
      Clear features automatic dark mode support and minimalist styling via <Code>styled-components</Code>.
    </Paragraph>
  </>
)
