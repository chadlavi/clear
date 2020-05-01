import * as React from 'react'
import {HashLink} from 'react-router-hash-link'
import styled from 'styled-components'
import {
  Code,
  CodeBlock,
  Grid,
  GridItem,
  GridItemSize,
  Header,
  Input,
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
        <Link as={HashLink} to={'#page'}><Code>{'<Page>'}</Code></Link>{' \u00b7 '}
        <Link as={HashLink} to={'#grid'}><Code>{'<Grid>'}</Code></Link>{' \u00b7 '}
        <Link as={HashLink} to={'#griditem'}><Code>{'<GridItem>'}</Code></Link>{' \u00b7 '}
        <Link as={HashLink} to={'#scrollcontainer'}><Code>{'<ScrollContainer>'}</Code></Link>{' \u00b7 '}
        <Link as={HashLink} to={'#responsive-sizing'}>Responsive sizing</Link>{' \u00b7 '}
        <Link as={HashLink} to={'#customization'}>Customization</Link>{' \u00b7 '}
        <Link as={HashLink} to={'#examples'}>Examples</Link>
      </Paragraph>
      <Header as='h2' id='page'><Code>{'<Page>'}</Code></Header>
      <Paragraph>
        The <Code>Page</Code> component renders a horizontally centered <Code>{'<main>'}</Code> HTML element (though you
        can use the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop
        </Link> to render a div or other block-level lement as necessary).
      </Paragraph>
      <Paragraph>
        <Code>Page</Code>s have a width of {numbers.width.main}px or the full screen width, whichever is lower.
      </Paragraph>
      <Paragraph>
        All content in your app should be contained within a <Code>Page</Code>.
      </Paragraph>
      <Header as='h3'>Props: <Code>PageProps</Code></Header>
      <Paragraph>
        <Code>Page</Code> accepts the props that could normally be passed to an HTML <Code>{'<main>'}</Code> element.
      </Paragraph>
      <Header as='h2' id='grid'><Code>{'<Grid>'}</Code></Header>
      <Paragraph>
        Use the <Code>Grid</Code> component to create a 12-column layout, with <Code>GridItem</Code> children that
        occupy a specified number of columns.
      </Paragraph>
      <Header as='h3'>Props: <Code>GridProps</Code></Header>
      <Paragraph>
        Besides children, <Code>Grid</Code> accepts the prop <Code>spacing?: number</Code>. If spacing is supplied, that
        number of pixels of space will be shown around all <Code>GridItem</Code>s.
      </Paragraph>
      <Header as='h2' id='griditem'><Code>{'<GridItem>'}</Code></Header>
      <Paragraph>
        Every child of a <Code>Grid</Code> should be a <Code>GridItem</Code>.
      </Paragraph>
      <Header as='h3'>Props: <Code>GridItemProps</Code></Header>
      <Paragraph>
        Besides children, <Code>GridItem</Code>s accept the prop <Code>size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
        11 | 12</Code>. The <Code>size</Code> prop defines how many columns the <Code>GridItem</Code> occupies. This
        prop defaults to <Code>12</Code>.
      </Paragraph>
      <Header as='h3' id='responsive-sizing'>Responsive sizing of <Code>GridItem</Code>s</Header>
      <Paragraph>
        Note that below the <Code>xs</Code> breakpoint ({numbers.breakpoint.xs}px), the <Code>size</Code> prop is
        ignored and all <Code>GridItem</Code>s are full-width.
      </Paragraph>
      <Header as='h2' id='scrollcontainer'><Code>{'<ScrollContainer>'}</Code></Header>
      <Paragraph>
        You can use a <Code>ScrollContainer</Code> to create a verticall or horizontally scrollable div with content of
        a fixed minimum height/width. Scroll containers are very convenient ways to
        prevent <Link as={HashLink} to={'/table#table'}><Code>{'<Table>'}</Code></Link>s from becoming unmanageable on
        responsive devices.
      </Paragraph>
      <Header as='h3'>Props: <Code>ScrollContainerProps</Code></Header>
      <Paragraph>
        Besides the props that can be passed to an HTML <Code>{'<div>'}</Code>, <Code>ScrollContainer</Code> accepts
        the following props:
      </Paragraph>
      <CodeBlock>{`contentMinHeight?: number | string
contentMinWidth?: number | string
direction: 'horizontal' | 'vertical'
maxHeight?: number | string
maxWidth?: number | string`}</CodeBlock>
      <Header as='h2' id='customization'>Customization</Header>
      <Paragraph>
        See <Link as={HashLink} to={'/start#customization'}>Customization</Link> discussion on the Getting started page.
      </Paragraph>
      <Header as='h2' id='examples'>
        <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/LayoutPage.tsx#L139'}>
          Examples
        </Link>
      </Header>
      <Header as='h3'><Code>Grid</Code></Header>
      <Paragraph>
        The following interactive example grid has colored borders on the outside of the <Code>Grid</Code> and
        the content of each <Code>GridItem</Code> to illustrate how <Code>Grid</Code>'s <Code>spacing</Code> prop
        and <Code>GridItem</Code>'s <Code>size</Code> prop work. Change the values below to increase/decrease the Grid
        spacing and change the column size of each item.
      </Paragraph>
      <ExampleBorder color='var(--clear-border)' background='var(--clear-zebra)' padded={false}>
        <Grid spacing={gridSpacing}>
          <GridItem>
            <ExampleBorder color='dodgerblue'>
              <Input
                value={gridSpacing}
                label={'Grid spacing'}
                type={'number'}
                inputMode={'numeric'}
                min={0}
                onChange={(e): void => setGridSpacing(parseInt(e.currentTarget.value || '0', 10))}
              />
            </ExampleBorder>
          </GridItem>
          <GridItem size={gridItem1}>
            <ExampleBorder color='forestgreen'>
              <Input
                value={gridItem1}
                type={'number'}
                inputMode={'numeric'}
                label={'Green GridItem\'s size'}
                onChange={gridItemOnChange(setGridItem1)}
              />
            </ExampleBorder>
          </GridItem>
          <GridItem size={gridItem2}>
            <ExampleBorder color='red'>
              <Input
                value={gridItem2}
                type={'number'}
                inputMode={'numeric'}
                label={'Red GridItem\'s size'}
                onChange={gridItemOnChange(setGridItem2)}
              />
            </ExampleBorder>
          </GridItem>
          <GridItem size={gridItem3}>
            <ExampleBorder color='violet'>
              <Input
                value={gridItem3}
                type={'number'}
                inputMode={'numeric'}
                label={'Violet GridItem\'s size'}
                onChange={gridItemOnChange(setGridItem3)}
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
