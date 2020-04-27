import * as React from 'react'
import {
  Code,
  Header,
  Grid,
  GridItem,
  Input,
  GridItemSize,
  numbers,
  Paragraph,
  Link,
} from '../component-lib'
import styled from 'styled-components'

interface ExampleContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string
  color: string
  padded?: boolean
}

const ExampleContainer = ({background, color, padded, ...props}: ExampleContainerProps) => <div {...props} />

const ExampleBorder = styled(ExampleContainer)`
width: 100%;
border: 1px solid ${p => p.color};
padding: ${p => p.padded === false ? '0' : 'var(--clear-unit)'};
background: ${p => p.background || 'var(--clear-background)'};
border-radius: var(--clear-unit);
`

export const LayoutPage = () => {
  const [gridSpacing, setGridSpacing] = React.useState<number | undefined>(8)
  const [gridItem1, setGridItem1] = React.useState<GridItemSize | undefined>(6)
  const [gridItem2, setGridItem2] = React.useState<GridItemSize | undefined>(6)
  const [gridItem3, setGridItem3] = React.useState<GridItemSize | undefined>(12)
  
  const gridItemOnChange = (
    setter: React.Dispatch<React.SetStateAction<GridItemSize | undefined>>
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value, 10)
    if (newValue > 0 && newValue <= 12) {
      setter(newValue as GridItemSize)
    }
  }

  return (
    <>
      <Header>Layout</Header>
      <Header as='h2' id='page'><Code>{`<Page>`}</Code></Header>
      <Paragraph>
        The <Code>Page</Code> component renders a horizontally centered <Code>{`<main>`}</Code> HTML element (though you
        can use the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop
        </Link> to render a div or other block-level lement as necessary).
      </Paragraph>
      <Paragraph>
        <Code>Page</Code>s have a width of {numbers.width.main}px or the full screen width, whichever is lower.
      </Paragraph>
      <Paragraph>
        All content in this documentation site is contained within a <Code>Page</Code>.
      </Paragraph>
      <Header as='h2' id='grid'><Code>{`<Grid>`}</Code></Header>
      <Paragraph>
        Use the <Code>Grid</Code> component to create a 12-column layout, with <Code>GridItem</Code> children that
        occupy a specified number of columns.
      </Paragraph>
      <Paragraph>
        Besides children, <Code>Grid</Code> accepts the prop <Code>spacing?: number</Code>. If spacing is supplied, that
        number of pixels of space will be shown around all <Code>GridItem</Code>s.
      </Paragraph>
      <Header as='h2' id='griditem'><Code>{`<GridItem>`}</Code></Header>
      <Paragraph>
        Besides children, <Code>GridItem</Code>s accept the prop <Code>size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
        11 | 12</Code>. The <Code>size</Code> prop defines how many columns the <Code>GridItem</Code> occupies. This
        prop defaults to <Code>12</Code>.
      </Paragraph>
      <Header as='h3' id='responsive-sizing'>Responsive sizing</Header>
      <Paragraph>
        Below the <Code>xs</Code> breakpoint ({numbers.breakpoint.xs}px), all <Code>GridItem</Code>s are full-width.
      </Paragraph>
      <Header as='h2' id='examples'>
        <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/LayoutPage.tsx#L87'}>Examples</Link>
      </Header>
      <Paragraph>
        The following interactive example grid has added color-coded borders.
      </Paragraph>
      <ExampleBorder color='var(--clear-border)' background='var(--clear-zebra)' padded={false}>
        <Grid spacing={gridSpacing}>
          <GridItem>
            <ExampleBorder color='blue'>
              <Input 
                value={gridSpacing}
                label={'Grid spacing'}
                type={'number'}
                inputMode={'numeric'}
                onChange={e => setGridSpacing(parseInt(e.currentTarget.value || '0'))}
              />
            </ExampleBorder>
          </GridItem>
          <GridItem size={gridItem1}>
            <ExampleBorder color='forestgreen'>
              <Input
                value={gridItem1}
                type={'number'}
                inputMode={'numeric'}
                label={'This GridItem\'s size'}
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
                label={'This GridItem\'s size'}
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
                label={'This GridItem\'s size'}
                onChange={gridItemOnChange(setGridItem3)}
              />
            </ExampleBorder>
          </GridItem>
        </Grid>
      </ExampleBorder>
    </>
)
}