import * as React from 'react'
import {HashLink} from 'react-router-hash-link'
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
  numbers,
  useDarkMode,
} from '../component-lib'

interface ColorTileProps extends React.HTMLAttributes<HTMLDivElement> {
  color: Colors
  textColor?: string
  theme: Themes
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledTile = styled(({color, textColor, theme, ...props}: ColorTileProps) => (
  <div {...props} />
))`
  background-color: ${(p): string => colors[p.theme as Themes][p.color]};
  color: ${(p): string => complimentaryColors[p.theme as Themes][p.color]};
  margin-bottom: calc(var(--clear-unit) * 2);
  @media (min-width: ${numbers.breakpoint.xs}px) {
    margin-right: calc(var(--clear-unit) * 2);
  }
  padding: calc(var(--clear-unit) * 2);
  border-radius: var(--clear-unit);
  h3 {
    margin: 0;
  }
  code {
    background: none;
    padding: 0;
  }
  & > div {
    font-size: var(--clear-font-size-label);
  }
`

const ColorTile = (props: ColorTileProps): JSX.Element => (
  <GridItem size={6} id={`${props.theme}mode-${props.color}`}>
    <StyledTile theme={props.theme} color={props.color}>
      <Header as='h3'>
        {props.color}: <Code>{colors[props.theme][props.color]}</Code>
      </Header>
      <div>contrast color: <Code>{complimentaryColors[props.theme][props.color]}</Code></div>
    </StyledTile>
  </GridItem>
)

export const ColorsPage: React.FC = () => {
  const dark = useDarkMode()
  return (
    <>
      <Header>Colors</Header>
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
        See also: <Link as={HashLink} to='/global-styles#cssvariables'><Code>{'<CSSVariables>'}</Code></Link>
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
