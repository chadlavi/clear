import * as React from 'react'
import {HashLink} from 'react-router-hash-link'
import {setTitle} from '../utils'
import {
  Button,
  Code,
  CodeBlock,
  Header,
  Link,
  Notification,
  Paragraph,
} from '../component-lib'

export const NotificationPage: React.FC = () => {
  const [standard, setStandard] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [transient, setTransient] = React.useState(false)
  const [transientUndismissible, setTransientUndismissible] = React.useState(false)
  const [mini, setMini] = React.useState(false)

  const setAllFalse = (): void => {
    setStandard(false)
    setSuccess(false)
    setError(false)
    setTransient(false)
    setTransientUndismissible(false)
    setMini(false)
  }

  return (
    <>
      {setTitle('Notifications')}
      <Header><Code>{'<Notification>'}</Code></Header>
      <Paragraph as={'nav'}>
        <Link as={HashLink} to={'#props'}>Props</Link>{' \u00b7 '}
        <Link as={HashLink} to={'#customization'}>Customization</Link>{' \u00b7 '}
        <Link as={HashLink} to={'#examples'}>Examples</Link>
      </Paragraph>
      <Paragraph>
        Use a <Code>{'<Notification>'}</Code> to show users a short, timely message that might automatically disappear
        and that the user may be able to manually dismiss (or both).
      </Paragraph>
      <Paragraph>
        For accessibility reasons, it's best to insert the <Code>{'<Notification>'}</Code> component in your code
        within the context it's relevant to. In the <Link as={HashLink} to='#examples'>examples</Link> below, you can
        see that the <Code>{'<Notification>'}</Code> immediately follows the <Code>{'<Button>'}</Code> that invokes it.
      </Paragraph>
      <Header as='h2' id='props'>Props: <Code>NotificationProps</Code></Header>
      <Paragraph>
        <Code>{'<Notification>'}</Code> has two required props:
      </Paragraph>
      <CodeBlock>{`/**
 * Control whether or not the Notification is open
 */
open: boolean`}</CodeBlock>
      <Paragraph>and</Paragraph>
      <CodeBlock>{`/**
 * Pass a function to set the value of \`open\` to this prop
 */
setOpen: React.Dispatch<React.SetStateAction<boolean>> | (() => void)`}</CodeBlock>
      <Paragraph>
      You can also pass these props:
      </Paragraph>
      <CodeBlock>{`/**
 * Optional props to pass to the dismiss button
 */
buttonProps?: ButtonProps
/**
 * If true or undefined, a dismiss button will be shown that the user can use
 * to manually dismiss the Notification.
 */
dismissible?: boolean
/**
 * If true, the Notification will be styled with error coloring
 */
error?: boolean
/**
 * If true, the notification will be narrower, with centered text, and a
 * dismiss button will not be shown regardless of the value of \`dismissible\`.
 */
mini?: boolean
/**
 * If true, the Notification will be styled with success coloring
 */
success?: boolean
/**
 * Overrides the default timeout duration of a transient Notification.
 * Defaults to 1500ms.
 */
timeOut?: number
/**
 * If true, the Notification will self-dismiss after either 1500ms or the
 * number of milliseconds passed to \`timeOut\`.
 *
 * Note: this prop and \`dismissible\` can be used together.
 */
transient?: boolean`}</CodeBlock>
      <Header as='h2' id='customization'>Customization</Header>
      <Paragraph>
      See <Link as={HashLink} to={'/start#customization'}>Customization</Link> discussion on the Getting started page.
      </Paragraph>
      <Paragraph>
        To make customization easier, some fixed class names are applied to elements
        inside <Code>{'<Notification>'}</Code>. The base component has class <Code>notification</Code>. The content has
        class <Code>notification-content</Code>. The dismiss button, if present, has
        class <Code>notification-dismiss-button</Code>.
      </Paragraph>
      <Header as ='h2' id='examples'>Examples</Header>
      <Paragraph as='div'>
        <Button
          onClick={(): void => {setAllFalse(); setStandard(true)}}
        >
          Show standard Notification
        </Button>
        <Notification
          open={standard}
          setOpen={setStandard}
        >
          This is a standard notification
        </Notification>
      </Paragraph>
      <Paragraph as='div'>
        <Button
          onClick={(): void => {setAllFalse(); setSuccess(true)}}
        >
          Show success Notification
        </Button>
        <Notification
          open={success}
          setOpen={setSuccess}
          success
        >
          This is a success notification
        </Notification>
      </Paragraph>
      <Paragraph as='div'>
        <Button
          onClick={(): void => {setAllFalse(); setError(true)}}
        >
          Show error Notification
        </Button>
        <Notification
          open={error}
          setOpen={setError}
          error
        >
          This is an error notification
        </Notification>
      </Paragraph>
      <Paragraph as='div'>
        <Button
          onClick={(): void => {setAllFalse(); setTransient(true)}}
        >
          Show transient dismissible Notification
        </Button>
        <Notification
          open={transient}
          setOpen={setTransient}
          transient
          timeOut={1000 * 3}
        >
          This is a transient notification you can dismiss manually too
        </Notification>
      </Paragraph>
      <Paragraph as='div'>
        <Button
          onClick={(): void => {setAllFalse(); setTransientUndismissible(true)}}
        >
          Show transient-only Notification
        </Button>
        <Notification
          open={transientUndismissible}
          setOpen={setTransientUndismissible}
          transient
          dismissible={false}
        >
          This is a transient-only notification
        </Notification>
      </Paragraph>
      <Paragraph as='div'>
        <Button
          onClick={(): void => {setAllFalse(); setMini(true)}}
        >
          Show mini Notification
        </Button>
        <Notification
          open={mini}
          setOpen={setMini}
          mini
        >
          Mini notification
        </Notification>
      </Paragraph>
    </>
  )
}
