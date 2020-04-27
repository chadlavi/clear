import * as React from 'react'
import { Header, Paragraph, Link, Code } from '../component-lib'

export const HomePage = () => (
  <>
  <Header>Clear</Header>
  <Paragraph>
    Clear is a simple personal Design System for TypeScript React apps created by <Link href={'https://github.com/chadlavi'}>Chad Lavimoniere</Link>.
  </Paragraph>
  <Paragraph>
    Clear features automatic darkmode support and minimalist styling via <Code>styled-components</Code>.
  </Paragraph>
  </>
)