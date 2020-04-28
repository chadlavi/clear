import * as React from 'react'
import {HashLink} from 'react-router-hash-link'
import styled from 'styled-components'
import {
  Button,
  Code,
  CodeBlock,
  Header,
  Link,
  Paragraph,
  colors,
  errorFocusStyle,
  numbers,
  useResponsiveColor,
} from '../component-lib'

export const GettingStartedPage: React.FC = () => {

  const ErrorButton = styled(Button)`
    background: var(--clear-error);
    color: var(--clear-background);
  `
  const BigErrorButton = styled(Button)`
    background: ${colors.light.error};
    color: ${colors.light.background};
    font-size: ${numbers.fontSize.default * 2}px;
    border-radius: ${numbers.unit * 2}px;
    padding: ${numbers.unit * 4}px ${numbers.unit * 8}px;
  `

  const ResponsiveBigErrorButton = styled(Button)`
    background: ${useResponsiveColor('error')};
    color: ${useResponsiveColor('background')};
    font-size: ${numbers.fontSize.default * 2}px;
    border-radius: ${numbers.unit * 2}px;
    padding: ${numbers.unit * 4}px ${numbers.unit * 8}px;
  `

  const FocusableResponsiveBigErrorButton = styled(Button)`
    background: ${useResponsiveColor('error')};
    color: ${useResponsiveColor('background')};
    font-size: ${numbers.fontSize.default * 2}px;
    border-radius: ${numbers.unit * 2}px;
    padding: ${numbers.unit * 4}px ${numbers.unit * 8}px;
    ${errorFocusStyle}
  `
  return (
    <>
      <Header>Getting started</Header>
      <Header as='h2'>Editing your <Code>.npmrc</Code></Header>
      <Paragraph>
        Clear is hosted on GitHub package registry. To install it, add the following to your project's <Code>.npmrc
        </Code>:
      </Paragraph>
      <CodeBlock>registry=https://npm.pkg.github.com/chadlavi</CodeBlock>
      <Header as='h2'>Installing</Header>
      <Paragraph>
        After editing your <Code>.npmrc</Code>, run the following to install Clear and its required peer
        dependency, <Code>styled-components</Code>.
      </Paragraph>
      <CodeBlock>{`npm i @chadlavi/clear styled-components

# only necessary if you use TypeScript
npm i -D @types/styled-components`}</CodeBlock>
      <Paragraph>
        (Note: we assume here that you have already installed <Code>react</Code>. If not, install that too! Clear only
        works in React applications.)
      </Paragraph>
      <Header as='h2'>Setting up your app</Header>
      <Header as='h3'>Globals</Header>
      <Paragraph>
        When using Clear, you need to include a single instance
        of <Link as={HashLink} to={'/global-styles#cssvariables'}><Code>{'<CSSVariables />'}</Code></Link> at the top
        level of your application. You should also include an instance
        of <Link as={HashLink} to={'/global-styles#globalstyles'}><Code>{'<GlobalStyles />'}</Code></Link>. Something
        like:
      </Paragraph>
      <CodeBlock>{`// inside your index.js file

import * as React from 'react'
import {MyApp} from './MyApp'
import ReactDOM from 'react-dom'
import {
  CSSVariables,
  GlobalStyles,
} from '@chadlavi/clear'

ReactDOM.render(
  <React.StrictMode>
    <CSSVariables/>
    <GlobalStyles />
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')
)`}</CodeBlock>
      <Header as='h3'>Structure</Header>
      <Paragraph>
        You should wrap content in your app with a <Link as={HashLink} to ={'/layout#page'}><Code>{'<Page>'}</Code>
        </Link>.
      </Paragraph>
      <Paragraph>
        Use the <Link as={HashLink} to ={'/layout#grid'}><Code>{'<Grid>'}</Code> and <Code>{'<GridItem>'}</Code>
        </Link> components to organize content on a 12-column grid.
      </Paragraph>
      <Header as='h3'>Import statements</Header>
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
      <Header as='h3'>Using theme styles</Header>
      <Paragraph>
        Since <Link as={HashLink} to={'/global-styles#cssvariables'}><Code>{'<CSSVariables />'}</Code></Link> creates
        global CSS variables, you can access them in your app's styles.
      </Paragraph>
      <Paragraph>
        Let's say you want to create an error button. You can access the Clear CSS variable <Code>var(--clear-error)
        </Code> like this:
      </Paragraph>
      <CodeBlock>{`// ErrorButton.tsx

import * as React from 'react'
import styled from 'styled-components'
import {Button} from '@chadlavi/clear'

export const ErrorButton = styled(Button)\`
  background: var(--clear-error);
  color: var(--clear-background);
\``}</CodeBlock>
      <Paragraph>
        <ErrorButton
          onClick={(): void => alert('You clicked the error button')}
        >
          Error button
        </ErrorButton>
      </Paragraph>
      <Paragraph>
        Note that CSS variables from Clear automatically change to accommodate dark mode; the variable <Code>
        var(--clear-error)</Code> will yield <Code>{colors.light.error}</Code> in light mode
        and <Code>{colors.dark.error}</Code> in dark mode.
      </Paragraph>
      <Header as='h4'>Accessing theme values in code</Header>
      <Paragraph>
        If you use JSS or just need access to a theme value in your code, you can also access color and number values
        from Clear directly in your code with the exported <Code>colors</Code> and <Code>numbers</Code> objects:
      </Paragraph>
      <CodeBlock>{`// BigErrorButton.tsx

import * as React from 'react'
import styled from 'styled-components'
import {
  Button,
  colors,
  numbers,
} from '@chadlavi/clear'

export const BigErrorButton = styled(Button)\`
  background: \${colors.light.error};
  border-radius: \${numbers.unit * 2}px;
  color: \${colors.light.background};
  font-size: \${numbers.fontSize.default * 2}px;
  padding: \${numbers.unit * 4}px \${numbers.unit * 8}px;
\``}</CodeBlock>
      <Paragraph>
        <BigErrorButton
          onClick={(): void => alert('You clicked the big error button')}
        >
          Big error button (BEB)
        </BigErrorButton>
      </Paragraph>
      <Paragraph>
        Note that in this case, the colors used will <i>not</i> respond to system dark/light mode changes. If you toggle
        your device back and forth between light and dark mode, you'll see that the big error button example above does
        not change.
      </Paragraph>
      <Paragraph>
        You can solve this by using the React hook <Code>useResponsiveColor: (name: Color) => string</Code> to select a
        color value.
      </Paragraph>
      <CodeBlock>{`import * as React from 'react'
import styled from 'styled-components'
import {
  Button,
  numbers,
  useResponsiveColor,
} from '@chadlavi/clear'

...

// somewhere inside a functional React component

const ResponsiveBigErrorButton = () => styled(Button)\`
  background: \${useResponsiveColor('error')};
  color: \${useResponsiveColor('background')};
  font-size: \${numbers.fontSize.default * 2}px;
  border-radius: ${numbers.unit * 2}px;
  padding: ${numbers.unit * 4}px ${numbers.unit * 8}px;
\``}</CodeBlock>
      <Paragraph>
        <ResponsiveBigErrorButton
          onClick={(): void => alert('You clicked the responsive big error button')}
        >
          Responsive BEB
        </ResponsiveBigErrorButton>
      </Paragraph>
      <Paragraph>
        You can also access the standard Clear focus style and error focus style with <Code>focusStyle</Code> and <Code>
        errorFocusStyle</Code>. Let's give our responsive big error button an error focus style:
      </Paragraph>
      <CodeBlock>{`import * as React from 'react'
import styled from 'styled-components'
import {
  Button,
  errorFocusStyle,
  numbers,
  useResponsiveColor,
} from '@chadlavi/clear'

...

// somewhere inside a functional React component

const FocusableResponsiveBigErrorButton = styled(Button)\`
  background: \${useResponsiveColor('error')};
  color: \${useResponsiveColor('background')};
  font-size: \${numbers.fontSize.default * 2}px;
  border-radius: \${numbers.unit * 2}px;
  padding: \${numbers.unit * 4}px \${numbers.unit * 8}px;
  \${errorFocusStyle}
\``}</CodeBlock>
      <Paragraph>
        <FocusableResponsiveBigErrorButton
          onClick={(): void => alert('Focus this button and the last one to see the difference')}
        >
          Responsive BEB with error focus
        </FocusableResponsiveBigErrorButton>
      </Paragraph>
    </>
  )
}
