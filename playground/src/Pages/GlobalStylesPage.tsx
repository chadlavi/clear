import * as React from 'react'
import {
  Header,
  Code,
  Paragraph,
  Link,
} from '../component-lib'
import {HashLink} from 'react-router-hash-link'

export const GlobalStylesPage = () => (
  <>
    <Header>Global styles</Header>
    <Header as='h2' id='cssvariables'><Code>CSSVariables</Code></Header>
    <Paragraph>
      Clear uses CSS variables extensively, so an instance of the <Code>CSSVariables</Code> component is
      required at the top level in your application for Clear to work correctly. The component declares a set of CSS
      variables with names that start with <Code>--clear-*</Code> that define the colors and measurements used in Clear
      components.
    </Paragraph>
    <Header as='h2' id='dark-mode'>Dark mode</Header>
    <Paragraph>
      The <Code>CSSVariables</Code> component uses <Code>@media (prefers-color-scheme: dark)</Code> to define a set of
      colors for use when the user's device is in dark mode. Switching between light and dark mode is handled
      automatically.
    </Paragraph>
    <Header as='h2' id='globalstyles'><Code>GlobalStyles</Code></Header>  
    <Paragraph>
      The <Code>GlobalStyles</Code> component applies styles to the <Code>{`<body>`}</Code> tag. As such, <strong>this
      component has side effects</strong>, because it creates CSS rules that affect elements outside the Clear design
      system.
    </Paragraph>
    <Paragraph>
      Omitting the <Code>GlobalStyles</Code> component in your application will mean that any content not contained in
      a <Link as={HashLink} to={'/clear/layout#page'}><Code>Page</Code></Link> component may have unpredictable colors, background colors, font sizes, and margins. It is not
      recommended.
    </Paragraph>
  </>
)