import * as React from 'react'
import { Header, Paragraph, Link, Code, CodeBlock, } from '../component-lib'

export const HomePage = () => (
  <>
    <Header>Clear</Header>
    <Paragraph>
      <Link href={'https://github.com/chadlavi/clear'}>Clear</Link> is a simple personal Design System for TypeScript React apps created by <Link href={'https://github.com/chadlavi'}>Chad Lavimoniere</Link>.
    </Paragraph>
    <Paragraph>
      Clear features automatic dark mode support and minimalist styling via <Code>styled-components</Code>.
    </Paragraph>
    <Header as='h2'>Installation</Header>
    <Paragraph>
      Clear is hosted on GitHub package registry. To install, add the following to your project's <Code>.npmrc</Code>:
    </Paragraph>
    <CodeBlock>registry=https://npm.pkg.github.com/chadlavi</CodeBlock>
    <Paragraph>
      then install with <Code>npm i @chadlavi/clear</Code>
    </Paragraph>
    <Paragraph>
      Clear requires <Code>react</Code> and <Code>styled-components</Code> as peer dependencies in your application.
    </Paragraph>
    <Header as='h2'>Usage</Header>
    <Paragraph>
      All components in Clear are exported at the top level in the library, so you can write import statements like
    </Paragraph>
    <CodeBlock>{`import {
  CSSVariables,
  GlobalStyles,
  Header,
  Link,
  Page,
} from '@chadlavi/clear'`}
    </CodeBlock>
  </>
)