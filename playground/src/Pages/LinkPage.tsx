import * as React from 'react'
import {AccessibleHashlink} from '../AccessibleHashlink'
import {Link as RouterLink} from 'react-router-dom'
import {
  Code,
  CodeBlock,
  Header,
  Link,
  Paragraph,
} from '../component-lib'

export const LinkPage: React.FC = () =>
  <>
    <Header id={'link'}><Code>{'<Link>'}</Code></Header>
    <Paragraph as={'nav'}>
      <AccessibleHashlink to={'#external'}>External vs internal links</AccessibleHashlink>{' \u00b7 '}
      <AccessibleHashlink to={'#router'}>Router</AccessibleHashlink>{' \u00b7 '}
      <AccessibleHashlink to={'#props'}>Props</AccessibleHashlink>{' \u00b7 '}
      <AccessibleHashlink to={'#customization'}>Customization</AccessibleHashlink>{' \u00b7 '}
      <AccessibleHashlink to={'#examples'}>Examples</AccessibleHashlink>
    </Paragraph>
    <Paragraph>
      The <Code>Link</Code> component is a simple styled wrapper around an HTML <Code>{'<a>'}</Code> element.
    </Paragraph>
    <Header as='h2' id='external'>External vs internal links</Header>
    <Paragraph>
      Links with an <Code>href</Code> that matches <Code>/^http/</Code> are marked as external, and will automatically
      open in a new tab. External links are decorated with a "{'\u2197'}" icon.
    </Paragraph>
    <Header as='h2' id='router'>Router links</Header>
    <Paragraph>
      Use the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop</Link> to
      substitute the Link component of your choice:
    </Paragraph>
    <CodeBlock>
      {'<Link as={RouterLink} to={\'/\'}>Router link</Link>'}
    </CodeBlock>
    <Header as='h2' id='props'>Props: <Code>LinkProps</Code></Header>
    <Paragraph>
      <Code>Link</Code> accepts standard HTML anchor element props. Note that if you use
      the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop</Link> to
      substitute a different component, then your instance of <Code>Link</Code> will change to accept the props of the
      substituted component. For example, a RouterLink will accept the prop <Code>to: string</Code> which is not
      accepted by <Code>{'<a>'}</Code>.
    </Paragraph>
    <Header as='h2' id='customization'>Customization</Header>
    <Paragraph>
      See <AccessibleHashlink to={'/start#customization'}>Customization</AccessibleHashlink> discussion on the
      Getting started page.
    </Paragraph>
    <Header as='h2' id='examples'>
      <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/LinkPage.tsx#L54'}>Examples</Link>
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
  </>
