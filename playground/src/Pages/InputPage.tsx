import * as React from 'react'
import {
  Code,
  Grid,
  GridItem,
  Header,
  Input,
  Link,
  Paragraph,
} from '../component-lib'
export const InputPage: React.FC = () => {
  const [numericValue, setNumericValue] = React.useState<number | undefined>()
  const [textValue, setTextValue] = React.useState<string | undefined>()
  const [errorValue, setErrorValue] = React.useState<string | undefined>()
  const [requiredValue, setRequiredValue] = React.useState<string | undefined>()

  return (
    <>
      <Header><Code>{'<Input>'}</Code></Header>
      <Paragraph>
        The <Code>Input</Code> component is a styled wrapper around an HTML <Code>{'<input>'}</Code> element.
      </Paragraph>
      <Paragraph>
        Under the hood, the <Code>Input</Code> component actually returns a <Code>{'<label>'}</Code> with a
        nested <Code>{'<input>'}</Code> inside it.
      </Paragraph>
      <Header as='h2' id='props'>Props</Header>
      <Paragraph>
        <Code>Input</Code> accepts all the props you'd expect for an HTML <Code>{'<input>'}</Code>, plus the
        props <Code>label?: string</Code> to add a label and <Code>error?: boolean</Code> to toggle an error state.
      </Paragraph>
      <Header as='h2' id='examples'>
        <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/InputPage.tsx#L37'}>
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
            onChange={(e): void => setNumericValue(parseInt(e.currentTarget.value || '0'))}
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