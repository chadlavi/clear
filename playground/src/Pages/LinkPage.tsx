import {
  Header,
  Code,
  Paragraph,
  Link,
  CodeBlock,
  Email,
} from '../component-lib'
import {Link as RouterLink} from 'react-router-dom'
import * as React from 'react'

export const LinkPage = () => (
  <>
    <Header>Links</Header>
    <Header as='h2' id={'link'}><Code>{`<Link>`}</Code></Header>
    <Paragraph>
      The <Code>Link</Code> component is a simple styled wrapper around an HTML <Code>{`<a>`}</Code> element.
    </Paragraph>
    <Header as='h3' id='external'>External vs internal links</Header>
    <Paragraph>
      Links with an <Code>href</Code> that matches <Code>/^http/</Code> are marked as external, and will automatically
      open in a new tab. External links are decorated with a "{'\u2197'}" icon.
    </Paragraph>
    <Header as='h3' id='router'>Router links</Header>
    <Paragraph>
      Use the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop</Link> to
      substitute the Link component of your choice:
    </Paragraph>
    <CodeBlock>
      {`<Link as={RouterLink} to={'/'}>Router link</Link>`}
    </CodeBlock>
    <Header as='h2' id='email'><Code>{`<Email>`}</Code></Header>
    <Paragraph>
      The <Code>Email</Code> component is a wrapper around a <Code>Link</Code> with a <Code>mailto</Code> uri for its <Code>href</Code>. It accepts any prop that can be passed
      to an <Code>{`<a>`}</Code> element, but you only need to pass one prop to it: <Code>address: string</Code>.
    </Paragraph>
    <CodeBlock>{`<Email address={'foo@bar.com} />`}</CodeBlock>
    <Paragraph>
    Email links are decorated with a "{'\u2709'}" icon.
    </Paragraph>
    <Header as='h2' id='examples'>
      <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/LinkPage.tsx#L42'}>Examples</Link>
    </Header>
    <Paragraph>
      <Link href={'/clear/'}>Internal HTML link</Link> (causes page load)
    </Paragraph>
    <Paragraph>
      <Link as={RouterLink} to={'/'}>Router link</Link> (does not cause page load)
    </Paragraph>
    <Paragraph>
      <Link href={'https://github.com/chadlavi/clear'}>External link</Link>
    </Paragraph>
    <Paragraph>
      <Email address='foo@bar.com' />
    </Paragraph>
  </>
)