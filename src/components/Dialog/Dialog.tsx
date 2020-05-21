import * as React from 'react'
import styled from 'styled-components'
import {
  Button,
  ButtonProps,
  Header,
  Paragraph,
} from '..'
import {numbers, underXs} from '../../styles'

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Controls whether or not the dialog is shown
   */
  open: boolean | undefined
  /**
   * The function that sets the value of `open`
   */
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Optional header content for the Dialog
   */
  header?: React.ReactNode
  /**
   * An array of actions to generate `<Button>`s at the bottom of the Dialog
   */
  actions?: {
    /** The label of the `<Button>` */
    label: string
    /** The `<Button>`'s onClick function */
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    /** A shortcut to set the `<Button>` as primary without needing to pass `buttonProps` */
    primary?: boolean
    /** Optional overrides for the `<Button>`'s props */
    buttonProps?: ButtonProps
  }[]
}

const Backdrop = styled('div')`
  align-items: center;
  background-color: hsl(250, 60%, 3%, 0.7);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`
const DialogBody = styled('div')`
  background: var(--clear-background);
  border-radius: calc(var(--clear-unit) * 2);
  border: 1px solid var(--clear-border);
  @media (min-width: ${numbers.width.main}px) {
    max-width: calc(var(--clear-main-width) - var(--clear-unit) * 4);
  }
  max-height: calc(100% - var(--clear-unit) * 4);
  max-width: calc(100% - var(--clear-unit) * 4);
  padding: calc(var(--clear-unit) * 3);display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${underXs(`
    border: none;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
    margin: 0;
  `)}
`

const DialogContent = styled('div')`
  & > ${Header}:first-child, & > ${Paragraph}:first-child {
    margin-block-start: 0;
    margin-top: 0;
  }
  overflow-y: auto;
  margin-block-end: calc(var(--clear-unit) * 3)
`

const DialogButtons = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  flex-shrink: 0;
  ${Button} {
    margin-left: var(--clear-unit);
  }
`

const BackupButton = styled(DialogButtons)`
  display: none;
  ${underXs(`
    display: flex;
  `)}
`

/**
 * A simple responsive modal with optional action buttons
 *
 * https://chadlavi.github.io/clear/#/dialog
 */
export const Dialog: React.FC<DialogProps> = (props: DialogProps) => {

  const {
    actions,
    open,
    setOpen,
    header,
    ...other
  } = props

  const closeOnBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (e.target === e.currentTarget) {
      setOpen(false)
    }
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.keyCode === 27 || e.key === 'Escape') {
      setOpen(false)
    }
  }

  const backdropRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    backdropRef.current?.focus()
  }, [open])

  return (
    <>
      {open &&
        <Backdrop
          tabIndex={0}
          onClick={closeOnBackdropClick}
          onKeyDown={handleOnKeyDown}
          ref={backdropRef}
        >
          <DialogBody
            {...other}
          >
            <DialogContent>
              {header &&
                <Header as='h2'>{header}</Header>
              }
              {props.children}
            </DialogContent>
            {actions ?
              <DialogButtons>
                {actions.map(a => (
                  <Button
                    key={a.label}
                    primary={a.primary}
                    {...a.buttonProps}
                    onClick={a.onClick}
                  >
                    {a.label}
                  </Button>
                ))}
              </DialogButtons>
              : <BackupButton>
                <Button onClick={(): void => setOpen(false)}>Close</Button>
              </BackupButton>
            }
          </DialogBody>
        </Backdrop>
      }
    </>
  )
}
