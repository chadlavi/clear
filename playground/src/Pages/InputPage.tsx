import * as React from 'react'
import {HashLink} from 'react-router-hash-link'
import styled from 'styled-components'
import {
  Code,
  CodeBlock,
  Grid,
  GridItem,
  Header,
  Input,
  Link,
  Paragraph,
} from '../component-lib'

const FancyPinkInput = styled(Input)`
  border-color: purple;
  border-radius: 8px;
  &:not(input) {
    padding: 8px;
    span {
      font-style: italic;
    }
  }
  background: pink;
  color: purple;
  font-size: 24px;
  ::selection {
    color: pink;
    background: purple;
  }
  &:focus {
    box-shadow: 0 0 0 3px pink,
    0 0 0 4px purple;
  }
`

export const InputPage: React.FC = () => {
  const [numericValue, setNumericValue] = React.useState<number | undefined>()
  const [textValue, setTextValue] = React.useState<string | undefined>()
  const [errorValue, setErrorValue] = React.useState<string | undefined>()
  const [requiredValue, setRequiredValue] = React.useState<string | undefined>()
  const [customValue, setCustomValue] = React.useState<string | undefined>()

  const handleFancyChange = (e: React.ChangeEvent<HTMLInputElement>): void => setCustomValue(e.currentTarget.value)

  return (
    <>
      <Header><Code>{'<Input>'}</Code></Header>
      <Paragraph>
        <Link as={HashLink} to={'#props'}>Props</Link>{' \u00b7 '}
        <Link as={HashLink} to={'#customization'}>Customization</Link>{' \u00b7 '}
        <Link as={HashLink} to={'#examples'}>Examples</Link>
      </Paragraph>
      <Paragraph>
        The <Code>Input</Code> component is a styled wrapper around an HTML <Code>{'<input>'}</Code> element.
      </Paragraph>
      <Paragraph>
        Note that under the hood, the <Code>Input</Code> component actually returns an
        HTML <Code>{'<label>'}</Code> with a nested <Code>{'<input>'}</Code> inside it. It basically looks like this:
      </Paragraph>
      <CodeBlock>{`<label>
  <span>label text goes here</span>
  <input />
</label>`}</CodeBlock>
      <Header as='h2' id='props'>Props: <Code>InputProps</Code></Header>
      <Paragraph>
        <Code>Input</Code> accepts all the props you'd expect for an HTML <Code>{'<input>'}</Code>, plus the
        props <Code>label?: string</Code> to add a label and <Code>error?: boolean</Code> to toggle an error state.
      </Paragraph>
      <Header as='h2' id='customization'>Customization</Header>
      <Paragraph>
        See <Link as={HashLink} to={'/start#customization'}>Customization</Link> discussion on the Getting started page.
      </Paragraph>
      <Paragraph>
        Note that <Code>Input</Code> renders a <Code>{'<label>'}</Code> with a <Code>{'<input>'}</Code> inside
        it. When customizing <Code>Input</Code>, bear in mind that styles you write will be applied to both. You can use
        CSS selectors like <Code>&:not(input)</Code> to apply styles to just the <Code>{'<label>'}</Code>, or selectors
        like <Code>&:not(label)</Code> to target just the <Code>{'<input>'}</Code>. You can target the actual label text
        with a CSS selector like <Code>&:not(input) > span</Code>.
      </Paragraph>
      <CodeBlock>{`const FancyPinkInput = styled(Input)\`
  border-color: purple;
  border-radius: 8px;
  &:not(input) {
    padding: 8px;
    span {
      font-style: italic;
    }
  }
  background: pink;
  color: purple;
  font-size: 24px;
  ::selection {
    color: pink;
    background: purple;
  }
  &:focus {
    box-shadow: 0 0 0 3px pink,
    0 0 0 4px purple;
  }
\``}</CodeBlock>
      <Paragraph>
        <FancyPinkInput
          label={`Fancy pink input${customValue?.match(/fancy/i) ? '🌸' :''}`}
          value={customValue}
          onChange={handleFancyChange}
        />
      </Paragraph>
      <Header as='h2' id='examples'>
        <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/InputPage.tsx#L116'}>
          Examples
        </Link>
      </Header>
      <Grid spacing={8}>
        <GridItem size={6}>
          <Input
            value={numericValue}
            label={'Numeric input'}
            type={'number'}
            inputMode={'numeric'}
            onChange={(e): void => setNumericValue(parseInt(e.currentTarget.value || '0', 10))}
          />
        </GridItem>
        <GridItem size={6}>
          <Input
            value={textValue}
            label={'Text input'}
            onChange={(e): void => setTextValue(e.currentTarget.value)}
          />
        </GridItem>
        <GridItem size={6}>
          <Input
            value={errorValue}
            error
            label={'Input with error'}
            onChange={(e): void => setErrorValue(e.currentTarget.value)}
          />
        </GridItem>
        <GridItem size={6}>
          <Input
            value={requiredValue}
            required
            label={'Input'}
            onChange={(e): void => setRequiredValue(e.currentTarget.value)}
          />
        </GridItem>
      </Grid>
    </>
  )
}
