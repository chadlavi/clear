import * as React from 'react'
import {AccessibleHashlink} from './AccessibleHashlink'
import {setTitle} from '../utils'
import styled from 'styled-components'
import {
  Checkbox,
  Code,
  CodeBlock,
  Grid,
  GridItem,
  Header,
  Input,
  Label,
  Link,
  Paragraph,
  Radio,
  Select,
  SelectProps,
  handleMutliSelectOnChange,
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

const selectOptions: SelectProps['options'] = [
  {label: 'Buzz cola', value: 'buzz'},
  {label: 'Slurm', value: 'slurm'},
  {label: 'Slurm loco', value: 'slurm loco'},
  {label: 'Oil-ade', value: 'oilade'},
  {label: 'José Servo tequila', value: 'jose servo'},
  {label: '\'66 Thunderschewitz', value: 'thunderschewitz'},
  {label: 'Löwenbrau', value: 'lowenbrau'},
  {label: 'Dr. Jitter', value: 'dr jitter'},
  {label: '100 coffees', value: '100 coffees'},
  {label: 'Maltese liquor', value: 'maltese liquor'},
]

export const InputPage: React.FC = () => {
  const [numericValue, setNumericValue] = React.useState<number | undefined>()
  const [textValue, setTextValue] = React.useState<string | undefined>()
  const [errorValue, setErrorValue] = React.useState<string | undefined>()
  const [disabledValue] = React.useState<string | undefined>()
  const [requiredValue, setRequiredValue] = React.useState<string | undefined>()
  const [customValue, setCustomValue] = React.useState<string | undefined>()
  const [textAreaValue, setTextAreaValue] = React.useState<string | undefined>()

  const [singleSelectValue, setSingleSelectValue] = React.useState<string | number | string[] | undefined>()
  const [errorSingleSelectValue, setErrorSingleSelectValue] = React.useState<string | number | string[] | undefined>()
  const [
    requiredSingleSelectValue,
    setRequiredSingleSelectValue
  ] = React.useState<string | number | string[] | undefined>()

  const [multiSelectValue, setMultiSelectValue] = React.useState<string[] | undefined>()
  const [errorMultiSelectValue, setErrorMultiSelectValue] = React.useState<string[] | undefined>()
  const [requiredMultiSelectValue, setRequiredMultiSelectValue] = React.useState<string[] | undefined>()

  const [checked, setChecked] = React.useState(false)
  const [errorChecked, setErrorChecked] = React.useState(false)

  const [radioValue, setRadioValue] = React.useState<string>()

  const handleFancyChange = (e: React.ChangeEvent<HTMLInputElement>): void => setCustomValue(e.currentTarget.value)

  return (
    <>
      {setTitle('Input')}
      <Header id='inputs'>Inputs</Header>
      <Paragraph as={'nav'}>
        <AccessibleHashlink to={'#input'}><Code>{'<Input>'}</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#inputprops'}><Code>InputProps</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#select'}><Code>{'<Select>'}</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#selectprops'}><Code>SelectProps</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#checkbox'}><Code>{'<Checkbox>'}</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#checkboxprops'}><Code>CheckBoxProps</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#radio'}><Code>{'<Radio>'}</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#radioprops'}><Code>RadioProps</Code></AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#customization'}>Customization</AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#examples'}>Examples</AccessibleHashlink>
      </Paragraph>
      <Header as='h2' id='input'><Code>{'<Input>'}</Code></Header>
      <Paragraph>
        The <Code>Input</Code> component is a styled wrapper around an HTML <Code>{'<input>'}</Code> element.
      </Paragraph>
      <Paragraph>
        Note that <Code>Input</Code> should always be paired with
        a <AccessibleHashlink to={'/text#label'}><Code>{'<Label>'}</Code></AccessibleHashlink>.
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
        the <AccessibleHashlink to={'#examples'}>examples</AccessibleHashlink> below.
      </Paragraph>
      <Header as='h2' id='select'><Code>{'<Select>'}</Code></Header>
      <Paragraph>
        <Code>{'<Select>'}</Code> is a wrapper around HTML <Code>{'<select>'}</Code>. Instead of manually building a
        set of child <Code>{'<option>'}</Code>s as in HTML, you pass an array of options to
        the <Code>options</Code> prop.
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

      <Header as='h2' id='checkbox'><Code>{'<Checkbox>'}</Code></Header>
      <Paragraph>
        <Code>{'<Checkbox>'}</Code> is a wrapper around HTML <Code>{'<input type=\'checkbox\'>'}</Code>.
      </Paragraph>
      <Header as='h3' id='checkboxprops'>Props: <Code>CheckboxProps</Code></Header>
      <Paragraph>
        <Code>{'<Checkbox>'}</Code> accepts the normal props that could be passed to an
        HTML <Code>{'<input type=\'checkbox\'>'}</Code>. You can also pass the props <Code>label?: string</Code> to
        define a label for the checkbox, and <Code>error?: boolean</Code> to toggle an error state.
      </Paragraph>
      <Header as='h2' id='radio'><Code>{'<Radio>'}</Code></Header>
      <Paragraph>
        <Code>{'<Radio>'}</Code> is a wrapper around HTML <Code>{'<input type=\'radio\'>'}</Code>.
      </Paragraph>
      <Header as='h3' id='radioprops'>Props: <Code>RadioProps</Code></Header>
      <Paragraph>
        Identically to <Code>{'<Checkbox>'}</Code>, <Code>{'<Radio>'}</Code> accepts the normal props that could be
        passed to an HTML <Code>{'<input type=\'checkbox\'>'}</Code>. You can also pass the
        props <Code>label?: string</Code> to define a label for the radio option,
        and <Code>error?: boolean</Code> to toggle an error state for the option.
      </Paragraph>
      <Header as='h2' id='customization'>Customization</Header>
      <Paragraph>
        See <AccessibleHashlink to={'/start#customization'}>Customization</AccessibleHashlink> discussion on the
        Getting started page.
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
        <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/InputPage.tsx#L216'}>
          Examples
        </Link>
      </Header>
      <Paragraph as={'nav'}>
        <AccessibleHashlink to={'#input-examples'}>
          <Code>{'<Input>'}</Code> examples
        </AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#select-examples'}>
          <Code>{'<Select>'}</Code> examples
        </AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#checkbox-examples'}>
          <Code>{'<Checkbox>'}</Code> examples
        </AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#radio-examples'}><Code>{'<Radio>'}</Code> examples</AccessibleHashlink>
      </Paragraph>
      <Grid spacing={8}>
        <GridItem>
          <Header as='h3' id='input-examples'><Code>{'<Input>'}</Code></Header>
        </GridItem>
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
            rows={7}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setTextAreaValue(e.currentTarget.value)}
          />
        </GridItem>
        <GridItem>
          <Header as='h3' id='select-examples'><Code>{'<Select>'}</Code></Header>
        </GridItem>
        <GridItem size={6}>
          <Label htmlFor={'single-select'}>Single select</Label>
          <Select
            id={'single-select'}
            value={singleSelectValue}
            onChange={(e): void => setSingleSelectValue(e.currentTarget.value)}
            options={selectOptions}
          />
        </GridItem>
        <GridItem size={6}>
          <Label error htmlFor={'single-select-error'}>Single select with error</Label>
          <Select
            error
            id={'single-select-error'}
            value={errorSingleSelectValue}
            onChange={(e): void => setErrorSingleSelectValue(e.currentTarget.value)}
            options={selectOptions}
          />
        </GridItem>
        <GridItem size={6}>
          <Label required htmlFor={'single-select'}>Single select</Label>
          <Select
            id={'single-select'}
            value={requiredSingleSelectValue}
            onChange={(e): void => setRequiredSingleSelectValue(e.currentTarget.value)}
            options={selectOptions}
            required
          />
        </GridItem>
        <GridItem size={6}>
          <Label disabled htmlFor={'disabled-select'}>Disabled single select</Label>
          <Select
            id={'disabled-select'}
            disabled
            options={selectOptions}
          />
        </GridItem>
        <GridItem size={6}>
          <Label htmlFor={'multiple-select'}>Multiple select</Label>
          <Select
            id={'multiple-select'}
            multiple
            onChange={handleMutliSelectOnChange(setMultiSelectValue)}
            options={selectOptions}
            size={3}
            value={multiSelectValue}
          />
        </GridItem>
        <GridItem size={6}>
          <Label error htmlFor={'multiple-select-error'}>Multiple select with error</Label>
          <Select
            error
            id={'multiple-select-error'}
            multiple
            onChange={handleMutliSelectOnChange(setErrorMultiSelectValue)}
            options={selectOptions}
            size={3}
            value={errorMultiSelectValue}
          />
        </GridItem>
        <GridItem size={6}>
          <Label required htmlFor={'required-multiple-select'}>Multiple select</Label>
          <Select
            id={'required-multiple-select'}
            multiple
            onChange={handleMutliSelectOnChange(setRequiredMultiSelectValue)}
            options={selectOptions}
            required
            size={3}
            value={requiredMultiSelectValue}
          />
        </GridItem>
        <GridItem size={6}>
          <Label disabled htmlFor={'disabled-multiple-select'}>Disabled multiple select</Label>
          <Select
            id={'disabled-multiple-select'}
            multiple
            options={selectOptions}
            disabled
            size={3}
          />
        </GridItem>
        <GridItem size={6}>
          <Header as='h3' id='checkbox-examples'><Code>{'<Checkbox>'}</Code></Header>
          <Checkbox
            checked={checked}
            onChange={(e): void => setChecked(e.target.checked)}
            id={'basic-checkbox'}
            label={'Checkbox'}
          />
          <Checkbox
            checked={errorChecked}
            onChange={(e): void => setErrorChecked(e.target.checked)}
            id={'error-checkbox'}
            error
            label={'Checkbox with error'}
          />
          <Checkbox
            checked={false}
            id={'disabled-checkbox'}
            disabled
            label={'Disabled checkbox'}
          />
          <Checkbox
            checked={true}
            id={'disabled-checkbox-checked'}
            disabled
            label={'Disabled checkbox (checked)'}
          />
        </GridItem>
        <GridItem size={6}>
          <Header as='h3' id='radio-examples'><Code>{'<Radio>'}</Code></Header>
          <form role={'radiogroup'}>
            <Radio
              checked={radioValue === 'standard'}
              onChange={(e): void => setRadioValue(e.target.value)}
              id={'basic-radio'}
              label={'Radio button'}
              name={'radio'}
              value={'standard'}
            />
            <Radio
              checked={radioValue === 'error'}
              onChange={(e): void => setRadioValue(e.target.value)}
              id={'error-radio'}
              error
              label={'Radio button with error'}
              name={'radio'}
              value={'error'}
            />
            <Radio
              checked={radioValue === 'disabled'}
              onChange={(e): void => setRadioValue(e.target.value)}
              disabled
              id={'disabled-radio'}
              label={'Disabled radio button'}
              name={'radio'}
              value={'disabled'}
            />
          </form>
        </GridItem>
      </Grid>
    </>
  )
}
