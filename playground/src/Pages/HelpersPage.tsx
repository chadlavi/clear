import * as React from 'react'
import {
  Code,
  CodeBlock,
  Header,
  Link,
  Paragraph,
  numbers,
  useBreakpoint,
  useDarkMode,
  useMediaQuery,
  useResponsiveColor,
} from '../component-lib'

export const HelpersPage: React.FC = () =>
  <>
    <Header>Helpers</Header>
    <Paragraph>
      The following <Link href='https://reactjs.org/docs/hooks-intro.html'>React hooks</Link> are available in Clear.
      When using them, please bear in mind the <Link href='https://reactjs.org/docs/hooks-rules.html'>rules of
      hooks</Link> &mdash; most importantly, that <i>React hooks can only be used inside functional React
      components</i>.
    </Paragraph>
    <Header as='h3' id='usemediaquery'><Code>useMediaQuery</Code></Header>
    <CodeBlock>{'useMediaQuery(query: string) => boolean'}</CodeBlock>
    <Paragraph>
      This basic React hook returns a boolean value that reflects whether or not the given <Code>query</Code> matches.
    </Paragraph>
    <CodeBlock>
      {'Your browser is in {useMediaQuery(\'(orientation: landscape)\') ? \'landscape\' : \'portrait\'} orientation.'}
    </CodeBlock>
    <Paragraph>
      Your browser is in {useMediaQuery('(orientation: landscape)') ? 'landscape' : 'portrait'} orientation.
    </Paragraph>
    <Header as='h3' id='usebreakpoint'><Code>useBreakpoint</Code></Header>
    <CodeBlock>{`type Breakpoint = 'xs' | 'sm' | 'md' | 'lg'

useBreakpoint(breakpoint: Breakpoint) => boolean`}</CodeBlock>
    <Paragraph>
      Returns a boolean value that reflects whether or not the user's viewport is smaller than the given breakpoint.
    </Paragraph>
    <CodeBlock>
      {'Your browser is {useBreakpoint(\'sm\') ? \'narrower\' : \'wider\'} than {numbers.breakpoint.sm}px.'}
    </CodeBlock>
    <Paragraph>
      Your browser is {useBreakpoint('sm') ? 'narrower' : 'wider'} than {numbers.breakpoint.sm}px.
    </Paragraph>
    <Header as='h3' id='usedarkmode'><Code>useDarkMode</Code></Header>
    <CodeBlock>{'useDarkMode() => boolean'}</CodeBlock>
    <Paragraph>
      Returns a boolean value that reflects whether or not the user's browser is currently in dark mode.
    </Paragraph>
    <CodeBlock>
      {'Your browser is in {useDarkMode() ? \'dark\' : \'light\'} mode.'}
    </CodeBlock>
    <Paragraph>
      Your browser is in {useDarkMode() ? 'dark' : 'light'} mode.
    </Paragraph>
    <Header as='h3' id='useresponsivecolor'><Code>useResponsiveColor</Code></Header>
    <CodeBlock>{`type Colors = 'background' | 'blue' | 'border' | 'error' | 'link' |
  'textColor' | 'violet' | 'zebra'

useResponsiveColor(color: Colors) => string`}</CodeBlock>
    <Paragraph>
      Returns the CSS color value that matches the user's browser's current theme (light or dark mode) for the given
      color.
    </Paragraph>
    <CodeBlock>
      {`<Paragraph style={{color: useResponsiveColor('violet')}}>
  This paragraph is <b>'{useResponsiveColor('violet')}'</b>, the tone of violet
  that has appropriate contrast on <b>{useResponsiveColor('background')}</b>,
  the current background color.
</Paragraph>`}
    </CodeBlock>
    <Paragraph style={{color: useResponsiveColor('violet')}}>
      This paragraph is <b>'{useResponsiveColor('violet')}'</b>, the tone of violet that has appropriate contrast
      on <b>{useResponsiveColor('background')}</b>, the current background color.
    </Paragraph>
  </>
