import * as React from 'react'
import {
  Button,
  Code,
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

  return (
    <>
      <Header><Code>{'<Dialog>'}</Code></Header>
      <Paragraph>
       Use <Code>{'<Dialog>'}</Code> to show a modal with action buttons to the user.
      </Paragraph>
      <Paragraph as ='div'>
        <Button onClick={showBasicDialog}>Show basic dialog</Button>
        <Dialog
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
      </Paragraph>
      <Paragraph as='div'>
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
    </>
  )}
