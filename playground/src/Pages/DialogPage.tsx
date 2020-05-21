import * as React from 'react'
import {
  Button,
  Code,
  Dialog,
  Header,
  Paragraph,
} from '../component-lib'

export const DialogPage: React.FC = () => {
  const [dialog, setDialog] = React.useState<boolean>(false)
  const showDialog = (): void => setDialog(true)
  const hideDialog = (): void => setDialog(false)

  return (
    <>
      <Header><Code>{'<Dialog>'}</Code></Header>
      <Paragraph>
       Use <Code>{'<Dialog>'}</Code> to show a modal with action buttons to the user.
      </Paragraph>
      <Button onClick={showDialog}>Show dialog</Button>
      <Dialog
        actions={[
          {
            label: 'Delete',
            buttonProps: {
              destructive: true,
            },
            onClick: hideDialog,
          },
          {
            label: 'Cancel',
            onClick: hideDialog,
          },
        ]}
        open={dialog}
        setOpen={setDialog}
        header={'Delete'}
      >
        <Paragraph>
          You cannot undo this action. Are you sure?
        </Paragraph>
      </Dialog>
    </>
  )}
