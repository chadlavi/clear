import * as React from 'react'
import {AccessibleHashlink} from '../AccessibleHashlink'
import {
  Button,
  Code,
  CodeBlock,
  Dialog,
  Header,
  Notification,
  Paragraph,
} from '../component-lib'

export const DialogPage: React.FC = () => {

  const [basicDialog, setBasicDialog] = React.useState<boolean>(false)
  const showBasicDialog = (): void => setBasicDialog(true)

  const [dialogWithActions, setDialogWithActions] = React.useState<boolean>(false)
  const showDialogWithActions = (): void => setDialogWithActions(true)
  const hideDialogWithActions = (): void => setDialogWithActions(false)

  const [deleted, setDeleted] = React.useState<boolean>(false)

  const onDeleteClick = (): void => {
    const delay = 100 + Math.floor(Math.random() * 900)
    hideDialogWithActions()
    setTimeout(() => {
      setDeleted(true)
    }, delay)
  }

  const [dialogDisableClickAway, setDialogDisableClickAway] = React.useState<boolean>(false)
  const showDialogDisableClickAway = (): void => setDialogDisableClickAway(true)
  const hideDialogDisableClickAway = (): void => setDialogDisableClickAway(false)

  return (
    <>
      <Header><Code>{'<Dialog>'}</Code></Header>
      <Paragraph as={'nav'}>
        <AccessibleHashlink to={'#props'}>Props</AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#customization'}>Customization</AccessibleHashlink>{' \u00b7 '}
        <AccessibleHashlink to={'#examples'}>Examples</AccessibleHashlink>
      </Paragraph>
      <Paragraph>
       Use <Code>{'<Dialog>'}</Code> to show a modal with action buttons to the user.
      </Paragraph>
      <Header as ='h2' id='props'>Props: <Code>DialogProps</Code></Header>
      <Paragraph>
        <Code>{'<Dialog>'}</Code> accepts props that can be passed to an
        HTML <Code>{'<div>'}</Code>. These props are passed to the centered modal window.
      </Paragraph>
      <Paragraph>
        <Code>{'<Dialog>'}</Code> has the following required props:
      </Paragraph>
      <CodeBlock>
        {`/**
  * Controls whether or not the dialog is shown
  */
open: boolean

/**
 * The function that sets the value of \`open\`
 */
setOpen: React.Dispatch<React.SetStateAction<boolean>> | (() => void)`}
      </CodeBlock>
      <Paragraph>
        <Code>{'<Dialog>'}</Code> also accepts the following optional props:
      </Paragraph>
      <CodeBlock>{`/**
 * An array of actions to generate \`<Button>\`s at the bottom of the Dialog
 */
actions?: {
  /** The label of the \`<Button>\` */
  label: string
  /** The \`<Button>\`'s onClick function */
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  /** A shortcut to set the \`<Button>\` as primary without needing to pass \`buttonProps\` */
  primary?: boolean
  /** Optional overrides for the \`<Button>\`'s props */
  buttonProps?: ButtonProps
}[]

/**
 * If true, the user cannot click away from the dialog
 */
disableClickAway?: boolean

/**
 * Optional header content for the Dialog
 */
header?: React.ReactNode

`}
      </CodeBlock>
      <Header as='h3' id='disableclickaway'>Notes on usage of <Code>disableClickAway?: boolean</Code></Header>
      <Paragraph>
        The <Code>disableClickAway</Code> prop creates a <Code>{'<Dialog>'}</Code> that cannot be closed by the user
        by clicking away from the dialog or by hitting the <Code>esc</Code> key. Because it traps the user, this prop
        has no effect if <Code>actions</Code> is undefined&mdash;that is, you cannot disable clickaway behavior on
        a <Code>{'<Dialog>'}</Code> with no buttons.
      </Paragraph>
      <Paragraph>
        It is absolutely essential to properly handle closing the dialog in the <Code>onClick</Code> functions of your
        action buttons when setting <Code>disableClickAway</Code> to <Code>true</Code>.
      </Paragraph>
      <Header as='h2' id='customization'>Customization</Header>
      <Paragraph>
        See <AccessibleHashlink to={'/start#customization'}>Customization</AccessibleHashlink> discussion on the
        Getting started page.
      </Paragraph>
      <Header as ='h2' id='examples'>Examples</Header>
      <Paragraph as ='div'>
        <Button onClick={showBasicDialog}>Show basic dialog</Button>
        <Dialog
          // disableClickAway
          open={basicDialog}
          setOpen={setBasicDialog}
        >
          <Paragraph>
            This is a basic dialog, with no actions or header.
          </Paragraph>
          <Paragraph margins={false}>
            you can dismiss with <Code>esc</Code> or by clicking the backdrop.
          </Paragraph>
        </Dialog>
      </Paragraph><Paragraph as='div'>
        <Button onClick={showDialogWithActions}>Show dialog with actions</Button>
        <Dialog
          actions={[
            {
              label: 'Delete',
              buttonProps: {
                destructive: true,
              },
              onClick: onDeleteClick,
            },
            {
              label: 'Cancel',
              onClick: hideDialogWithActions,
            },
          ]}
          open={dialogWithActions}
          setOpen={setDialogWithActions}
          header={'Delete'}
        >
          <Paragraph>
            You cannot undo this action. Are you sure?
          </Paragraph>
        </Dialog>
        <Notification
          error
          mini
          open={deleted}
          setOpen={setDeleted}
          transient
        >
          Deleted
        </Notification>
      </Paragraph>
      <Paragraph as='div'>
        <Button onClick={showDialogDisableClickAway}>Show dialog with disableClickAway</Button>
        <Dialog
          disableClickAway
          actions={[
            {
              label: 'Close',
              primary: true,
              onClick: hideDialogDisableClickAway,
            },
          ]}
          open={dialogDisableClickAway}
          setOpen={setDialogDisableClickAway}
          header={'You can\'t click away.'}
        >
          <Paragraph>
            This <Code>{'<Dialog>'}</Code> has the prop <Code>disableClickAway</Code> set to true.
          </Paragraph>
          <Paragraph>
            To dismiss this dialog, the user must click the "close" button below.
          </Paragraph>
        </Dialog>
      </Paragraph>
    </>
  )}
