import * as React from 'react'
import {
  Button,
  Code,
  Header,
  Link,
  Paragraph,
} from '../component-lib'

const onClick = (copy: string) =>  (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  alert(copy)
}

export const ButtonPage = () => (
  <>
    <Header><Code>{`<Button>`}</Code></Header>
    <Paragraph>
      The <Code>Button</Code> component is a simple styled wrapper around an HTML <Code>{`<button>`}</Code>.
    </Paragraph>
    <Header as='h2' id='props'>Props</Header>
    <Paragraph>
      Besides the standard props an HTML <Code>{`<button>`}</Code> accepts, <Code>Button</Code> also accepts the
      prop <Code>primary?: boolean</Code> to mark a button as a primary call to action button.
    </Paragraph>
    <Header as='h2' id='examples'>
      <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/ButtonPage.tsx#L31'}>Examples</Link>
    </Header>
    <Header as='h3' id='standard-button'>Standard button</Header>
    <Paragraph>
      <Button
        onClick={onClick('You clicked the standard button')}
      >
        This is a standard button
      </Button>
    </Paragraph>
    <Header as='h3' id='primary-button'>Primary button</Header>
    <Paragraph>
      <Button
        primary
        onClick={onClick('You clicked the primary button')}
      >
        This is a primary button
      </Button>
    </Paragraph>
    <Header as='h3' id='disabled-button'>Disabled button</Header>
    <Paragraph>
      <Button
        disabled
        onClick={onClick('You\'ll never see this alert because this button is disabled')}
      >
        This is a disabled standard button
      </Button>
    </Paragraph>
    <Paragraph>
      <Button
        disabled
        primary
        onClick={onClick('You\'ll never see this alert because this button is disabled')}
      >
        This is a disabled primary button
      </Button>
    </Paragraph>
  </>
)