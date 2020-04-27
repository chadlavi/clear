import {
  Header,
  Code,
  Paragraph,
  Link,
} from '../component-lib'
import {Link as RouterLink} from 'react-router-dom'
import * as React from 'react'

export const LinkPage = () => (
  <>
    <Header><Code>Link</Code></Header>
    <Paragraph>
      The <Code>Link</Code> component is a simple styled wrapper around an HTML <Code>{`<a>`}</Code> element.
    </Paragraph>
    <Header as='h2' id='external'>External vs internal links</Header>
    <Paragraph>
      Links with an <Code>href</Code> that matches <Code>/^http/</Code> are marked as external, and will automatically
      open in a new tab. External links are decorated with a "{'\u2197'}" icon.
    </Paragraph>
    <Header as='h2' id='router'>Router links</Header>
    <Paragraph>
      Use the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop</Link> to
      substitute the Link component of your choice. The links at the top of this page are <Code>Link</Code> elements
      with <Code> react-router-dom</Code> link substitutions.
    </Paragraph>
    <Header as='h2' id='examples'>Examples</Header>
    <Paragraph>
      <Link href={'/clear/'}>Internal HTML link</Link> (causes page load)
    </Paragraph>
    <Paragraph>
      <Link as={RouterLink} to={'/link'}>Router link</Link> to this page (does not cause page load)
    </Paragraph>
    <Paragraph>
      <Link href={'https://github.com/chadlavi/clear'}>External link</Link>
    </Paragraph>
  </>
)