import * as React from 'react'
import {AccessibleHashlink} from '../AccessibleHashlink'
import styled from 'styled-components'
import {
  Code,
  CodeBlock,
  Grid,
  GridItem,
  GridItemSize,
  Header,
  Input,
  Label,
  Link,
  Paragraph,
  ScrollContainer,
  numbers,
} from '../component-lib'

interface ExampleContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string
  color: string
  padded?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExampleContainer = ({background, color, padded, ...props}: ExampleContainerProps): JSX.Element =>
  <div {...props} />


const ExampleBorder = styled(ExampleContainer)`
width: 100%;
border: 1px solid ${(p): string => p.color};
padding: ${(p): string => p.padded === false ? '0' : 'var(--clear-unit)'};
background: ${(p): string => p.background || 'var(--clear-background)'};
border-radius: var(--clear-unit);
`

export const LayoutPage: React.FC = () => {
  const [gridSpacing, setGridSpacing] = React.useState<number>(8)
  const [gridItem1, setGridItem1] = React.useState<GridItemSize>(6)
  const [gridItem2, setGridItem2] = React.useState<GridItemSize>(6)
  const [gridItem3, setGridItem3] = React.useState<GridItemSize>(12)

  const gridItemOnChange = (
    setter: React.Dispatch<React.SetStateAction<GridItemSize>>
  ) => (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = parseInt(e.currentTarget.value, 10)
    if (newValue > 0 && newValue <= 12) {
      setter(newValue as GridItemSize)
    }
  }

  return (
    <>
      <Header>Layout components</Header>
      <Paragraph>
        <AccessibleHashlink to={'#page'}><Code>{'<Page>'}</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#skiplink'}><Code>{'<Skiplink>'}</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#grid'}><Code>{'<Grid>'}</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#griditem'}><Code>{'<GridItem>'}</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#scrollcontainer'}><Code>{'<ScrollContainer>'}</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#responsive-sizing'}>Responsive sizing</AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#customization'}>Customization</AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#examples'}>Examples</AccessibleHashlink>
      </Paragraph>
      <Header as='h2' id='page'><Code>{'<Page>'}</Code></Header>
      <Paragraph>
        The <Code>Page</Code> component renders a horizontally
        centered <Code>{'<main>'}</Code> HTML element (though you can use
        the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}>
          <Code>as</Code> prop</Link> to render a div or other block-level lement as necessary).
      </Paragraph>
      <Paragraph>
        <Code>Page</Code>s have a width of {numbers.width.main}px or the full
        screen width, whichever is lower.
      </Paragraph>
      <Paragraph>
        All content in your app should be contained within a <Code>Page</Code>.
      </Paragraph>
      <Header as='h3'>Props: <Code>PageProps</Code></Header>
      <Paragraph>
        <Code>{'<Page>'}</Code> accepts the props that could normally be passed to an
        HTML <Code>{'<main>'}</Code> element.
      </Paragraph>
      <Paragraph>
        <Code>{'<Page>'}</Code> also accepts the optional
        prop <Code>size?: 'main' | 'lg' | 'xl'</Code> that controls the width of
        the <Code>{'<Page>'}</Code>. If nothing is provided, the width defaults
        to <Code>main</Code>.
      </Paragraph>
      <CodeBlock>{`Page size values:
  main: ${numbers.width.main}px (default)
    lg: ${numbers.width.lg}px
    xl: ${numbers.width.xl}px`}</CodeBlock>
      <Header as='h2' id='skiplink'><Code>{'<Skiplink>'}</Code></Header>
      <Paragraph>
        Use a <Code>{'<Skiplink>'}</Code> to enable users who rely on keyboard
        navigation to skip over menus/navigational
        elements on your site. <Code>{'<Skiplink>'}</Code> renders a button that
        is hidden until it gets focus, and on click
        it will move focus to the element whose id is passed to its <Code>id</Code> prop.
      </Paragraph>
      <Paragraph>
        The <Code>{'<Skiplink>'}</Code> component should be inserted before the
        navigational elements of your application. You can see an example of
        a <Code>{'<Skiplink>'}</Code> by reloading this page and hitting
        the <Code>Tab</Code> key on your keyboard.
      </Paragraph>
      <Header as='h3'>Props: <Code>SkipLinkProps</Code></Header>
      <Paragraph>
        <Code>{'<Skiplink>'}</Code> accepts only one
        prop: <Code>id: string</Code>. Pass the id of the element to which
        the <Code>{'<Skiplink>'}</Code> should skip.
      </Paragraph>
      <Header as='h2' id='grid'><Code>{'<Grid>'}</Code></Header>
      <Paragraph>
        Use the <Code>{'<Grid>'}</Code> component to create a 12-column layout,
        with <Code>{'<GridItem>'}</Code> children that occupy a specified
        number of columns.
      </Paragraph>
      <Header as='h3'>Props: <Code>GridProps</Code></Header>
      <Paragraph>
        Besides children, <Code>{'<Grid>'}</Code> accepts the
        prop <Code>spacing?: number</Code>. If spacing is supplied, that number
        of pixels of space will be shown around all <Code>{'<GridItem>'}</Code>s.
      </Paragraph>
      <Header as='h2' id='griditem'><Code>{'<GridItem>'}</Code></Header>
      <Paragraph>
        Every child of a <Code>{'<Grid>'}</Code> should be a <Code>{'<GridItem>'}</Code>.
      </Paragraph>
      <Header as='h3'>Props: <Code>GridItemProps</Code></Header>
      <Paragraph>
        Besides children, <Code>{'<GridItem>'}</Code>s accept the
        prop <Code>size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12</Code>.
        The <Code>size</Code> prop defines how many columns
        the <Code>{'<GridItem>'}</Code> occupies. This prop defaults to <Code>12</Code>.
      </Paragraph>
      <Header as='h3' id='responsive-sizing'>Responsive sizing of <Code>{'<GridItem>'}</Code>s</Header>
      <Paragraph>
        Note that below the <Code>xs</Code> breakpoint ({numbers.breakpoint.xs}px),
        the <Code>size</Code> prop is ignored and all <Code>{'<GridItem>'}</Code>s are full-width.
      </Paragraph>
      <Header as='h2' id='scrollcontainer'><Code>{'<ScrollContainer>'}</Code></Header>
      <Paragraph>
        You can use a <Code>ScrollContainer</Code> to create a verticall or
        horizontally scrollable div with content of
        a fixed minimum height/width. Scroll containers are very convenient ways
        to prevent <AccessibleHashlink to={'/table#table'}><Code>{'<Table>'}</Code>
        </AccessibleHashlink>s from becoming unmanageable on responsive devices.
      </Paragraph>
      <Header as='h3'>Props: <Code>ScrollContainerProps</Code></Header>
      <Paragraph>
        Besides the props that can be passed to an
        HTML <Code>{'<div>'}</Code>, <Code>ScrollContainer</Code> accepts the following props:
      </Paragraph>
      <CodeBlock>{`contentMinHeight?: number | string
contentMinWidth?: number | string
direction: 'horizontal' | 'vertical'
maxHeight?: number | string
maxWidth?: number | string`}</CodeBlock>
      <Header as='h2' id='customization'>Customization</Header>
      <Paragraph>
        See <AccessibleHashlink to={'/start#customization'}>Customization</AccessibleHashlink> discussion on the
        Getting started page.
      </Paragraph>
      <Header as='h2' id='examples'>
        <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/LayoutPage.tsx#L169'}>
          Examples
        </Link>
      </Header>
      <Header as='h3'><Code>{'<Grid>'}</Code></Header>
      <Paragraph>
        The following interactive example grid has colored borders on the
        outside of the <Code>{'<Grid>'}</Code> and the content of
        each <Code>{'<GridItem>'}</Code> to illustrate how <Code>{'<Grid>'}
        </Code>'s <Code>spacing</Code> prop and <Code>{'<GridItem>'}
        </Code>'s <Code>size</Code> prop work. Change the values below to
        increase/decrease the Grid spacing and change the column size of each item.
      </Paragraph>
      <ExampleBorder color='var(--clear-border)' background='var(--clear-zebra)' padded={false}>
        <Grid spacing={gridSpacing}>
          <GridItem>
            <ExampleBorder color='dodgerblue'>
              <Label htmlFor={'grid-spacing'}>Grid spacing</Label>
              <Input
                id={'grid-spacing'}
                inputMode={'numeric'}
                min={0}
                onChange={(e): void => setGridSpacing(parseInt(e.currentTarget.value || '0', 10))}
                type={'number'}
                value={gridSpacing}
              />
            </ExampleBorder>
          </GridItem>
          <GridItem size={gridItem1}>
            <ExampleBorder color='forestgreen'>
              <Label htmlFor={'grid-item-1'}>Green GridItem's size</Label>
              <Input
                id={'grid-item-1'}
                inputMode={'numeric'}
                onChange={gridItemOnChange(setGridItem1)}
                type={'number'}
                value={gridItem1}
              />
            </ExampleBorder>
          </GridItem>
          <GridItem size={gridItem2}>
            <ExampleBorder color='red'>
              <Label htmlFor={'grid-item-2'}>Red GridItem's size</Label>
              <Input
                id={'grid-item-2'}
                inputMode={'numeric'}
                onChange={gridItemOnChange(setGridItem2)}
                type={'number'}
                value={gridItem2}
              />
            </ExampleBorder>
          </GridItem>
          <GridItem size={gridItem3}>
            <ExampleBorder color='violet'>
              <Label htmlFor={'grid-item-3'}>Violet GridItem's size</Label>
              <Input
                id={'grid-item-3'}
                inputMode={'numeric'}
                onChange={gridItemOnChange(setGridItem3)}
                type={'number'}
                value={gridItem3}
              />
            </ExampleBorder>
          </GridItem>
        </Grid>
      </ExampleBorder>
      <Header as='h3'><Code>ScrollContainer</Code></Header>
      <ScrollContainer direction={'horizontal'}>
        <div
          style={{
            background: 'violet',
            borderRadius: 8,
            color: 'black',
            padding: 20,
            position: 'relative',
            width: 2000,
          }}
        >
          This div has a min-width of 2000px, but
          its <Code style={{color: 'var(--clear-textColor)'}}>ScrollContainer</Code> is only 100% width
          <div
            style={{
              bottom: 20,
              fontWeight: 'bold',
              position: 'absolute',
              right: 20,
            }}
          >
            neat!
          </div>
        </div>
      </ScrollContainer>
      <br/>
      <ScrollContainer direction={'vertical'} maxHeight={58}>
        <div
          style={{
            background: 'dodgerblue',
            borderRadius: 8,
            color: 'black',
            padding: 20,
            position: 'relative',
            height: 1000,
          }}
        >
          This div has a min-height of 1000px, but
          its <Code style={{color: 'var(--clear-textColor)'}}>ScrollContainer</Code> is only 58px tall
          <div
            style={{
              bottom: 20,
              fontWeight: 'bold',
              position: 'absolute',
              right: 20,
            }}
          >
            neat!
          </div>
        </div>
      </ScrollContainer>
    </>
  )
}
