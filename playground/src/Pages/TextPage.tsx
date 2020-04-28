import * as React from 'react'
import {Code, CodeBlock, Header, Link, Paragraph, numbers} from '../component-lib'

export const TextPage: React.FC = () => (
  <>
    <Header>Text formatting components</Header>
    <Paragraph>
      Clear offers various components for formatting text.
      See <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/TextPage.tsx'}>the source code
      for this page</Link> for examples.
    </Paragraph>
    <Header as='h2' id='header'><Code>{'<Header>'}</Code></Header>
    <Paragraph>
      <Code>Header</Code> can be used to create HTML header elements like <Code>{'<h1>'}</Code>, <Code>{'<h2>'}</Code>,
      etc. With no props passed, the <Code>Header</Code> defaults to rendering an <Code>{'<h1>'}</Code>.
    </Paragraph>
    <Header as='h3' id='header-props'><Code>Header</Code> props</Header>
    <Paragraph>
      Use the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop</Link> to
      substitute a different header element like so:
    </Paragraph>
    <CodeBlock>{`<Header as='h2'>
  This will render in the DOM as an h2
</Header>
<Header as='h3'>
  This will render in the DOM as an h3
</Header>
`}
    </CodeBlock>
    <Header as='h2' id='paragraph'><Code>{'<Paragraph>'}</Code></Header>
    <Paragraph>
      <Code>Paragraph</Code> is a simple styled wrapper around <Code>{'<p>'}</Code>.
    </Paragraph>
    <Header as='h3'><Code>Paragraph</Code> props</Header>
    <Paragraph>
      Besides the standard props that can be passed to an HTML <Code>{'<p>'}</Code> element, <Code>Paragraph</Code> also
      accepts the prop <Code>margins?: boolean</Code>. If <Code>margins</Code> is false, the <Code>Paragraph</Code> will
      not have margins; if it is true or undefined, the <Code>Paragraph</Code> will default to
      having {numbers.fontSize.default}px margins at the top and bottom.
    </Paragraph>
    <Header as='h2' id='code'><Code>{'<Code>'}</Code></Header>
    <Paragraph>
      <Code>Code</Code> is a simple styled wrapper around <Code>{'<code>'}</Code>, used for formatting inline code
      snippets.
    </Paragraph>
    <Header as='h2' id='codeblock'><Code>{'<CodeBlock>'}</Code></Header>
    <Paragraph>
      <Code>CodeBlock</Code> is a simple styled wrapper around <Code>{'<pre>'}</Code>, used for formatting block code
      snippets.
    </Paragraph>
  </>
)