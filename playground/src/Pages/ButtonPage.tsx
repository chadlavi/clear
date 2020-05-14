import * as React from 'react'
import {AccessibleHashlink} from './AccessibleHashlink'
import {setTitle} from '../utils'
import {
  Button,
  Code,
  Header,
  Link,
  Notification,
  Paragraph,
} from '../component-lib'

const onClick = (copy: string) =>  (e: React.MouseEvent<HTMLButtonElement>): void => {
  e.preventDefault()
  alert(copy)
}

export const ButtonPage: React.FC = () => {
  const [standard, setStandard] = React.useState<boolean>(false)
  const [primary, setPrimary] = React.useState<boolean>(false)
  return (
    <>
      {setTitle('Button')}
      <Header id='button'><Code>{'<Button>'}</Code></Header>
      <Paragraph>
      The <Code>Button</Code> component is a simple styled wrapper around an HTML <Code>{'<button>'}</Code>.
      </Paragraph>
      <Header as='h2' id='props'>Props: <Code>ButtonProps</Code></Header>
      <Paragraph>
      Besides the standard props an HTML <Code>{'<button>'}</Code> accepts, <Code>Button</Code> also accepts the
      prop <Code>primary?: boolean</Code> to mark a button as a primary call to action button.
      </Paragraph>
      <Header as='h2' id='customization'>Customization</Header>
      <Paragraph>
      See <AccessibleHashlink to={'/start#customization'}>Customization</AccessibleHashlink> discussion on the Getting
      started page.
      </Paragraph>
      <Header as='h2' id='examples'>
        <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/ButtonPage.tsx#L39'}>
        Examples
        </Link>
      </Header>
      <Header as='h3' id='standard-button'>Standard button</Header>
      <Paragraph as='div'>
        <Button
          onClick={(): void => setStandard(true)}
        >
          This is a standard button
        </Button>
        <Notification
          open={standard}
          setOpen={setStandard}
          transient
        >
          You clicked the standard button
        </Notification>
      </Paragraph>
      <Header as='h3' id='primary-button'>Primary button</Header>
      <Paragraph as='div'>
        <Button
          primary
          onClick={(): void => setPrimary(true)}
        >
          This is a primary button
        </Button>
        <Notification
          open={primary}
          setOpen={setPrimary}
          transient
        >
          You clicked the primary button
        </Notification>
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
}
