import * as React from 'react'
import { Header, Paragraph, Code, Link } from '../component-lib'

export const TextPage = () => (
  <>
    <Header>Text formatting</Header>
    <Paragraph>
      Clear offers various components for formatting text.
    </Paragraph>
    <Header as='h2' id='header'><Code>Header</Code></Header>
    <Paragraph>
      <Code>Header</Code> can be used to create HTML header elements like <Code>{`<h1>`}</Code>, <Code>{`<h2>`}</Code>,
      etc. With no props passed, the <Code>Header</Code> defaults to rendering an <Code>{`<h1>`}</Code>.
    </Paragraph>
    <Header as='h3' id='header-props'><Code>Header</Code> props</Header>
    <Paragraph>
      Use the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop</Link> to
      substitute a different header element like so:
    </Paragraph>
    <Paragraph>
      <Code>{`<Header as='h2'>This is an H2</Header>`}</Code>.
    </Paragraph>
    <Header as='h2' id='paragraph'><Code>Paragraph</Code></Header>
    <Paragraph>
      <Code>Paragraph</Code> is a simple styled wrapper around <Code>{`<p>`}</Code>.
    </Paragraph>
    <Header as='h2' id='code'><Code>Code</Code></Header>
    <Paragraph>
      <Code>Code</Code> is a simple styled wrapper around <Code>{`<code>`}</Code>, used for formatting inline code
      snippets.
    </Paragraph>
  </>
)