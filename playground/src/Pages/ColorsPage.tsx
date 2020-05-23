import * as React from 'react'
import {AccessibleHashlink} from '../AccessibleHashlink'
import styled from 'styled-components'
import {
  Code,
  Colors,
  Grid,
  GridItem,
  Header,
  Link,
  Paragraph,
  Themes,
  colors,
  complimentaryColors,
  useDarkMode,
} from '../component-lib'

const colorDescription: {[key in Colors]?: React.ReactNode} = {
  background: <>
    Used for page backgrounds and text on elements that don't have <Code>background</Code>, <Code>zebra</Code>,
    or <Code>border</Code> backgrounds
  </>,
  border: <>Used for borders in <AccessibleHashlink to='/input#inputs'>input</AccessibleHashlink> components
    and standard <AccessibleHashlink to='/button#button'>{'<Button>'}</AccessibleHashlink> background</>,
  red: <>Used for error state borders and text in <AccessibleHashlink to='/input#inputs'>input
  </AccessibleHashlink> components and for error <AccessibleHashlink to='/notification#notification'><Code>
    {'<Notification>'}</Code></AccessibleHashlink> background</>,
  green: <>Used for success <AccessibleHashlink to='/notification#notification'><Code>{'<Notification>'}</Code>
  </AccessibleHashlink> background</>,
  link: <>Used for <AccessibleHashlink to='/link#link'><Code>{'<Link>'}</Code></AccessibleHashlink> text and
    primary <AccessibleHashlink to='/button#button'>{'<Button>'}</AccessibleHashlink> and
    standard <AccessibleHashlink to='/notification#notification'><Code>{'<Notification>'}</Code>
  </AccessibleHashlink> backgrounds</>,
  textColor: <>Used for text when it appears on a <Code>background</Code>, <Code>
    border</Code>, or <Code>zebra</Code> colored background</>,
  zebra: <>Used as the background for even-numbered <AccessibleHashlink to='/table#examples'><Code>{'<TableRow>'}</Code>
  </AccessibleHashlink></>,
}

interface ColorTileProps extends React.HTMLAttributes<HTMLDivElement> {
  color: Colors
  textColor?: string
  theme: Themes
}

const StyledTile = styled(({color: _color, textColor: _textColor, theme: _theme, ...props}: ColorTileProps) => (
  <div {...props} />
))`
  background-color: ${(p): string => colors[p.theme as Themes][p.color]};
  color: ${(p): string => complimentaryColors[p.theme as Themes][p.color]};
  height: calc(100% - calc(var(--clear-unit) * 2));
  margin-bottom: calc(var(--clear-unit) * 2);
  margin-right: calc(var(--clear-unit) * 2);
  padding: calc(var(--clear-unit) * 2);
  border-radius: var(--clear-unit);
  a {
    color: inherit;
  }
  h3 {
    margin: 0;
  }
  code {
    background: none;
    padding: 0;
  }
  & > div {
    font-size: var(--clear-font-size-label);
    &:not(:last-child) {
      margin-bottom: var(--clear-unit);
    }
  }
  width: 80%;
`

interface StyledTextProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string
  textColor: string
}

const StyledText = styled(({color: _color, textColor: _textColor, ...props}: StyledTextProps) => (
  <div {...props} />
))`
  border: 1px solid ${(p): string => p.textColor};
  background-color: ${(p): string => p.color};
  color: ${(p): string => p.textColor};
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: calc(var(--clear-unit) * 2);
  border-radius: var(--clear-unit);
`

const Flexer = styled.div`
  display: flex;
`

const BigAndBold = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`

const ColorTile = (props: ColorTileProps): JSX.Element => (
  <GridItem id={`${props.theme}mode-${props.color}`}>
    <Flexer>
      <StyledTile theme={props.theme} color={props.color}>
        <Header as='h3'>
          {props.color}: <Code>{colors[props.theme][props.color]}</Code>
        </Header>
        <div>contrast color: <Code>{complimentaryColors[props.theme][props.color]}</Code></div>
        {colorDescription[props.color] && <div>{colorDescription[props.color]}</div>}
      </StyledTile>
      <StyledText
        color={complimentaryColors[props.theme][props.color]}
        textColor={colors[props.theme][props.color]}
      >
        <BigAndBold>
          Aa
        </BigAndBold>
        <div>
          Aa
        </div>
      </StyledText>
    </Flexer>
  </GridItem>
)

export const ColorsPage: React.FC = () => {
  const dark = useDarkMode()
  return (
    <>
      <Header>Colors</Header>
      <Paragraph as={'nav'}>
        <AccessibleHashlink to={'#lightmode'}>Light mode</AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#darkmode'}>Dark mode</AccessibleHashlink>
      </Paragraph>
      <Paragraph>
        All the colors used by Clear are shown below, along with the color that
        can be paired with each
        for <Link href={'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast'}>
          WCAG AA accessible text contrast</Link>.
      </Paragraph>
      <Paragraph>
        The current light/dark mode variant of each color can be accessed as a global
        CSS variable in the format <Code>var(--clear-COLORNAME)</Code>.
      </Paragraph>
      <Paragraph>
        Your browser is currently using the {dark ? 'dark' : 'light'} mode variants.
      </Paragraph>
      <Paragraph>
        See also: <AccessibleHashlink to='/global-styles#cssvariables'><Code>{'<CSSVariables>'}</Code>
        </AccessibleHashlink>
      </Paragraph>
      <Header as ='h2' id='lightmode'>
      Light mode {dark ? '' : '(current theme)'}
      </Header>
      <Grid>
        {(Object.keys(colors.light) as Colors[]).map((c) => (
          <ColorTile key={c} theme={'light'} color={c}/>
        ))
        }
      </Grid>
      <Header as ='h2' id='darkmode'>
      Dark mode {dark ? '(current theme)' : ''}
      </Header>
      <Grid>
        {(Object.keys(colors.dark) as Colors[]).map((c) => (
          <ColorTile key={c} theme={'dark'} color={c}/>
        ))
        }
      </Grid>
    </>
  )
}
