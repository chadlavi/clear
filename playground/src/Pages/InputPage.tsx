import * as React from 'react'
import {HashLink} from 'react-router-hash-link'
import {setTitle} from '../utils'
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
  Select,
  handleMultiSelectChange,
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

const selectOptions = [
  {label: 'Buzz cola', value: ['foo']},
  {label: 'Slurm', value: 'bar'},
  {label: 'Löwenbrau', value: 'baz'},
]

export const InputPage: React.FC = () => {
  const [numericInputValue, setNumericInputValue] = React.useState<number | undefined>()
  const [textInputValue, setTextInputValue] = React.useState<string | undefined>()
  const [errorInputValue, setErrorInputValue] = React.useState<string | undefined>()
  const [requiredInputValue, setRequiredInputValue] = React.useState<string | undefined>()
  const [customInputValue, setCustomInputValue] = React.useState<string | undefined>()
  const [singleSelectValue, setSingleSelectValue] = React.useState<string | number | string[] | undefined>()
  const [errorSingleSelectValue, setErrorSingleSelectValue] = React.useState<string | number | string[] | undefined>()
  const [
    requiredSingleSelectValue,
    setRequiredSingleSelectValue
  ] = React.useState<string | number | string[] | undefined>()
  const [multiSelectValue, setMultiSelectValue] = React.useState<string[] | undefined>()
  const [errorMultiSelectValue, setErrorMultiSelectValue] = React.useState<string[] | undefined>()
  const [requiredMultiSelectValue, setRequiredMultiSelectValue] = React.useState<string[] | undefined>()

  const handleFancyChange = (e: React.ChangeEvent<HTMLInputElement>): void => setCustomInputValue(e.currentTarget.value)

  return (
    <>
      {setTitle('Inputs')}
      <Header>Inputs</Header>
      <Paragraph>
        <Link as={HashLink} to={'#input'}><Code>{'<Input>'}</Code></Link>{' \u00b7 '}
        <Link as={HashLink} to={'#inputprops'}><Code>InputProps</Code></Link>{' \u00b7 '}
        <Link as={HashLink} to={'#select'}><Code>{'<Select>'}</Code></Link>{' \u00b7 '}
        <Link as={HashLink} to={'#selectprops'}><Code>SelectProps</Code></Link>{' \u00b7 '}
        <Link as={HashLink} to={'#customization'}>Customization</Link>{' \u00b7 '}
        <Link as={HashLink} to={'#examples'}>Examples</Link>
      </Paragraph>
      <Header as='h2' id='input'><Code>{'<Input>'}</Code></Header>
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
      <Header as='h3' id='inputprops'>Props: <Code>InputProps</Code></Header>
      <Paragraph>
        <Code>Input</Code> accepts all the props you'd expect for an HTML <Code>{'<input>'}</Code>, plus the
        props <Code>label?: string</Code> to add a label and <Code>error?: boolean</Code> to toggle an error state.
      </Paragraph>
      <Header as='h2' id='select'><Code>{'<Select>'}</Code></Header>
      <Paragraph>
        Select is a wrapper around HTML <Code>{'<select>'}</Code>. Instead of manually building a set of
        child <Code>{'<option>'}</Code>s as in HTML, you pass an array of options to the <Code>options</Code> prop.
      </Paragraph>
      <Header as='h3' id='selectprops'>Props: <Code>SelectProps</Code></Header>
      <Paragraph>
        Besides the normal props that could be passed to an HTML<Code>{'<select>'}</Code> in any React app,
        Clear's <Code>{'<Select>'}</Code> also has the required prop <Code>options</Code>, which expects a value of
        type
      </Paragraph>
      <CodeBlock>{'{label: string; value: string | number | string[]}[]'}</CodeBlock>
      <Paragraph>
        <Code>{'<Select>'}</Code> also accepts the props <Code>error?: boolean</Code> to control whether it appears in
        an error state, and <Code>label?: string</Code> to provide label content for the field.
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
          label={`Fancy pink input${customInputValue?.match(/fancy/i) ? '🌸' :''}`}
          value={customInputValue}
          onChange={handleFancyChange}
        />
      </Paragraph>
      <Header as='h2' id='examples'>
        <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/InputPage.tsx#L157'}>
          Examples
        </Link>
      </Header>
      <Grid spacing={8}>
        <GridItem>
          <Header as='h3'><Code>{'<Input>'}</Code></Header>
        </GridItem>
        <GridItem size={6}>
          <Input
            value={numericInputValue}
            label={'Numeric input'}
            type={'number'}
            inputMode={'numeric'}
            onChange={(e): void => setNumericInputValue(parseInt(e.currentTarget.value || '0', 10))}
          />
        </GridItem>
        <GridItem size={6}>
          <Input
            value={textInputValue}
            label={'Text input'}
            onChange={(e): void => setTextInputValue(e.currentTarget.value)}
          />
        </GridItem>
        <GridItem size={6}>
          <Input
            value={errorInputValue}
            error
            label={'Input with error'}
            onChange={(e): void => setErrorInputValue(e.currentTarget.value)}
          />
        </GridItem>
        <GridItem size={6}>
          <Input
            value={requiredInputValue}
            required
            label={'Input'}
            onChange={(e): void => setRequiredInputValue(e.currentTarget.value)}
          />
        </GridItem>
        <GridItem>
          <Header as='h3'><Code>{'<Select>'}</Code></Header>
        </GridItem>
        <GridItem size={4}>
          <Select
            label={'Single select'}
            value={singleSelectValue}
            onChange={(e): void => setSingleSelectValue(e.currentTarget.value)}
            options={selectOptions}
          />
        </GridItem>
        <GridItem size={4}>
          <Select
            error
            label={'Single select with error'}
            value={errorSingleSelectValue}
            onChange={(e): void => setErrorSingleSelectValue(e.currentTarget.value)}
            options={selectOptions}
          />
        </GridItem>
        <GridItem size={4}>
          <Select
            label={'Single select'}
            value={requiredSingleSelectValue}
            onChange={(e): void => setRequiredSingleSelectValue(e.currentTarget.value)}
            options={selectOptions}
            required
          />
        </GridItem>
        <GridItem size={4}>
          <Select
            label={'Multiple select'}
            multiple
            onChange={handleMultiSelectChange(multiSelectValue, setMultiSelectValue)}
            options={selectOptions}
            size={3}
            value={multiSelectValue}
          />
        </GridItem>
        <GridItem size={4}>
          <Select
            error
            label={'Multiple select with error'}
            multiple
            onChange={handleMultiSelectChange(errorMultiSelectValue, setErrorMultiSelectValue)}
            options={selectOptions}
            size={3}
            value={errorMultiSelectValue}
          />
        </GridItem>
        <GridItem size={4}>
          <Select
            label={'Multiple select'}
            multiple
            onChange={handleMultiSelectChange(requiredMultiSelectValue, setRequiredMultiSelectValue)}
            options={selectOptions}
            required
            size={3}
            value={requiredMultiSelectValue}
          />
        </GridItem>
      </Grid>
    </>
  )
}
