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
  Label,
  Link,
  Paragraph,
} from '../component-lib'

const FancyPinkParagraph = styled(Paragraph)`
  border-radius: var(--clear-unit);
  color: purple;
  padding: var(--clear-unit);
  background: pink;
  label {
    font-style: italic;
  }
`

const FancyPinkInput = styled(Input)`
  border-color: purple;
  border-radius: var(--clear-unit);
  background: pink;
  color: purple;
  font-size: calc(var(--clear-unit) * 3);
  ::selection {
    color: pink;
    background: purple;
  }
  &:focus {
    box-shadow: 0 0 0 calc(var(--clear-unit) / 2 - 1px) pink,
    0 0 0 calc(var(--clear-unit) / 2) purple;
  }
`

export const InputPage: React.FC = () => {
  const [numericValue, setNumericValue] = React.useState<number | undefined>()
  const [textValue, setTextValue] = React.useState<string | undefined>()
  const [errorValue, setErrorValue] = React.useState<string | undefined>()
  const [disabledValue] = React.useState<string | undefined>()
  const [requiredValue, setRequiredValue] = React.useState<string | undefined>()
  const [customValue, setCustomValue] = React.useState<string | undefined>()
  const [textAreaValue, setTextAreaValue] = React.useState<string | undefined>()

  const handleFancyChange = (e: React.ChangeEvent<HTMLInputElement>): void => setCustomValue(e.currentTarget.value)

  return (
    <>
      {setTitle('Input')}
      <Header id='input'><Code>{'<Input>'}</Code></Header>
      <Paragraph as={'nav'}>
        <Link as={HashLink} to={'#props'}>Props</Link>{' \u00b7 '}
        <Link as={HashLink} to={'#customization'}>Customization</Link>{' \u00b7 '}
        <Link as={HashLink} to={'#examples'}>Examples</Link>
      </Paragraph>
      <Paragraph>
        The <Code>Input</Code> component is a styled wrapper around an HTML <Code>{'<input>'}</Code> element.
      </Paragraph>
      <Paragraph>
        Note that <Code>Input</Code> should always be paired with
        a <Link as={HashLink} to={'/text#label'}><Code>{'<Label>'}</Code></Link>.
      </Paragraph>
      <Header as='h2' id='props'>Props: <Code>InputProps</Code></Header>
      <Paragraph>
        <Code>Input</Code> accepts all the props you'd expect for an HTML <Code>{'<input>'}</Code>, plus the
        prop <Code>error?: boolean</Code> to toggle an error state.
      </Paragraph>
      <Paragraph>
        You can also use
        the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop</Link> to
        render a <Code>{'<textarea>'}</Code> instead of an <Code>{'<input>'}</Code>, as shown in
        the <Link as={HashLink} to={'#examples'}>examples</Link> below.
      </Paragraph>
      <Header as='h2' id='customization'>Customization</Header>
      <Paragraph>
        See <Link as={HashLink} to={'/start#customization'}>Customization</Link> discussion on the Getting started page.
      </Paragraph>
      <Paragraph>
        Here's an example of a customized Input:
      </Paragraph>
      <CodeBlock>{`const FancyPinkParagraph = styled(Paragraph)\`
  border-radius: var(--clear-unit);
  color: purple;
  padding: var(--clear-unit);
  background: pink;
  label {
    font-style: italic;
  }
\`

const FancyPinkInput = styled(Input)\`
  border-color: purple;
  border-radius: var(--clear-unit);
  background: pink;
  color: purple;
  font-size: calc(var(--clear-unit) * 3);
  ::selection {
    color: pink;
    background: purple;
  }
  &:focus {
    box-shadow: 0 0 0 calc(var(--clear-unit) / 2 - 1px) pink,
    0 0 0 calc(var(--clear-unit) / 2) purple;
  }
\`

<FancyPinkParagraph>
  <Label htmlFor={'fancy-input'}>Fancy pink input</Label>
  <FancyPinkInput
    id={'fancy-input'}
    value={customValue}
    onChange={handleFancyChange}
  />
</FancyPinkParagraph>`}</CodeBlock>
      <FancyPinkParagraph>
        <Label
          htmlFor={'fancy-input'}>
          {`Fancy pink input${customValue?.match(/fancy/i) ? '🌸' :''}`}
        </Label>
        <FancyPinkInput
          id={'fancy-input'}
          value={customValue}
          onChange={handleFancyChange}
        />
      </FancyPinkParagraph>
      <Header as='h2' id='examples'>
        <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/InputPage.tsx#L118'}>
          Examples
        </Link>
      </Header>
      <Grid spacing={8}>
        <GridItem size={6}>
          <Label htmlFor={'numeric-input'}>Numeric input</Label>
          <Input
            value={numericValue}
            id={'numeric-input'}
            type={'number'}
            inputMode={'numeric'}
            onChange={(e): void => setNumericValue(parseInt(e.currentTarget.value || '0', 10))}
          />
        </GridItem>
        <GridItem size={6}>
          <Label htmlFor={'text-input'}>Basic text input</Label>
          <Input
            id={'text-input'}
            value={textValue}
            onChange={(e): void => setTextValue(e.currentTarget.value)}
          />
        </GridItem>
        <GridItem size={6}>
          <Label error htmlFor={'error-input'}>Input with error</Label>
          <Input
            id={'error-input'}
            value={errorValue}
            error
            onChange={(e): void => setErrorValue(e.currentTarget.value)}
          />
        </GridItem>
        <GridItem size={6}>
          <Label disabled htmlFor={'disabled-input'}>Disabled input</Label>
          <Input
            id={'disabled-input'}
            value={disabledValue}
            disabled
          />
        </GridItem>
        <GridItem size={6}>
          <Label required htmlFor={'required-input'}>Input</Label>
          <Input
            id={'required-input'}
            value={requiredValue}
            required
            onChange={(e): void => setRequiredValue(e.currentTarget.value)}
          />
        </GridItem>
        <GridItem>
          <Label htmlFor={'textarea-input'}>Input with <Code>{'as={\'textarea\'}'}</Code></Label>
          <Input
            as={'textarea'}
            id={'textarea-input'}
            value={textAreaValue}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setTextAreaValue(e.currentTarget.value)}
          />
        </GridItem>
      </Grid>
    </>
  )
}
