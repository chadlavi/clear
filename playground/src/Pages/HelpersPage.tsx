import * as React from 'react'
import {AccessibleHashlink} from '../AccessibleHashlink'
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
    <Paragraph as='nav'>
      <AccessibleHashlink to='#hooks'>React hooks</AccessibleHashlink>{' \u00b7 '}
      <AccessibleHashlink to='#other'>Other functions</AccessibleHashlink>
    </Paragraph>
    <Header as='h2' id='hooks'>React hooks</Header>
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
    <Header as='h3' id='useclickaway'><Code>useClickAway</Code></Header>
    <CodeBlock>{'useClickAway<T>(onClickAway: () => void, shouldListen?: boolean) => React.RefObject<T>'}</CodeBlock>
    <Paragraph>
      Use the <Code>useClickAway</Code> hook to give an element a clickaway listener through its
      React <Code>ref</Code> prop.
    </Paragraph>
    <Paragraph>
      A very simplistic example:
    </Paragraph>
    <CodeBlock>{`import {useClickAway} from '@chadlavi/clear'

const UseClickAwayExample: React.FC = () => {
  const [color, setColor] = React.useState<string>('blue')
  const ref = useClickAway<HTMLDivElement>(() => setColor('red'))

  return (
    <div
      ref={ref}
      style={{
        color: color,
      }}
    >
      Click outside this div to make this text turn red
    </div>
  )
}
`}</CodeBlock>
    <Paragraph>
      <Code>useClickAway</Code> is used inside
      the <AccessibleHashlink to='/dialog'><Code>{'<Dialog>'}</Code></AccessibleHashlink>{' and '}
      <AccessibleHashlink to='/notification'><Code>{'<Notification>'}</Code></AccessibleHashlink> components.
    </Paragraph>
    <Header as='h2' id='other'>Other functions</Header>
    <Header as='h3' id='makemediaquery'><Code>makeMediaQuery</Code></Header>
    <CodeBlock>{'makeMediaQuery(maxMin: \'max\' | \'min\', width: Breakpoint)(style: string) => string'}</CodeBlock>
    <Paragraph>
      Use to insert styles to apply over/under a given breakpoint size. This function is mostly used internally to make
      the following functions:
    </Paragraph>
    <Header as='h3' id='underxs'><Code>underXs</Code></Header>
    <CodeBlock>{'underXs(style: string) => string'}</CodeBlock>
    <Paragraph>
      Use to insert styles that should apply when the viewport is narrower than the <Code>xs</Code> breakpoint
      ({numbers.breakpoint.xs}px).
    </Paragraph>
    <Header as='h3' id='undersm'><Code>underSm</Code></Header>
    <CodeBlock>{'underSm(style: string) => string'}</CodeBlock>
    <Paragraph>
      Use to insert styles that should apply when the viewport is narrower than the <Code>sm</Code> breakpoint
      ({numbers.breakpoint.sm}px).
    </Paragraph>
    <Header as='h3' id='undermd'><Code>underMd</Code></Header>
    <CodeBlock>{'underMd(style: string) => string'}</CodeBlock>
    <Paragraph>
      Use to insert styles that should apply when the viewport is narrower than the <Code>md</Code> breakpoint
      ({numbers.breakpoint.md}px).
    </Paragraph>
    <Header as='h3' id='underlg'><Code>underLg</Code></Header>
    <CodeBlock>{'underLg(style: string) => string'}</CodeBlock>
    <Paragraph>
      Use to insert styles that should apply when the viewport is narrower than the <Code>lg</Code> breakpoint
      ({numbers.breakpoint.lg}px).
    </Paragraph>
    <Header as='h3' id='overxs'><Code>overXs</Code></Header>
    <CodeBlock>{'overXs(style: string) => string'}</CodeBlock>
    <Paragraph>
      Use to insert styles that should apply when the viewport is wider than the <Code>xs</Code> breakpoint
      ({numbers.breakpoint.xs}px).
    </Paragraph>
    <Header as='h3' id='oversm'><Code>overSm</Code></Header>
    <CodeBlock>{'overSm(style: string) => string'}</CodeBlock>
    <Paragraph>
      Use to insert styles that should apply when the viewport is wider than the <Code>sm</Code> breakpoint
      ({numbers.breakpoint.sm}px).
    </Paragraph>
    <Header as='h3' id='overmd'><Code>overMd</Code></Header>
    <CodeBlock>{'overMd(style: string) => string'}</CodeBlock>
    <Paragraph>
      Use to insert styles that should apply when the viewport is wider than the <Code>md</Code> breakpoint
      ({numbers.breakpoint.md}px).
    </Paragraph>
    <Header as='h3' id='overlg'><Code>overLg</Code></Header>
    <CodeBlock>{'overLg(style: string) => string'}</CodeBlock>
    <Paragraph>
      Use to insert styles that should apply when the viewport is wider than the <Code>lg</Code> breakpoint
      ({numbers.breakpoint.lg}px).
    </Paragraph>
  </>
