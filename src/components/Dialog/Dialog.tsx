import * as React from 'react'
import {Header} from '../Header'
import styled from 'styled-components'
import {useClickaway} from '../../utils'
import {Button, ButtonProps} from '../Button'
import {media, numbers} from '../../styles'

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
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
  /**
   * If true, the user cannot click away from the dialog
   */
  disableClickAway?: boolean
  /**
   * Optional header content for the Dialog
   */
  header?: React.ReactNode
  /**
   * Controls whether or not the dialog is shown
   */
  open: boolean
  /**
   * The function that sets the value of `open`
   */
  setOpen: React.Dispatch<React.SetStateAction<boolean>> | (() => void)
}

const Backdrop = styled.div({
  alignItems: 'center',
  backgroundColor: 'hsl(250, 60%, 3%, 0.7)',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  left: 0,
  position: 'fixed',
  top: 0,
  width: '100%',
})

const DialogBody = styled.div({
  background: 'var(--clear-background)',
  borderRadius: 'calc(var(--clear-unit) * 2)',
  border: '1px solid var(--clear-border)',
  [`@media (minWidth: ${numbers.width.main}px)`]: {
    maxWidth: 'calc(var(--clear-main-width) - var(--clear-unit) * 4)',
  },
  maxHeight: 'calc(100% - var(--clear-unit) * 4)',
  maxWidth: 'calc(100% - var(--clear-unit) * 4)',
  padding: 'calc(var(--clear-unit) * 2)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [media.breakpoints.xs.down]: {
    border: 'none',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    margin: 0,
  }
})

interface DialogContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  margin: boolean
}

const DialogContentBase: React.FC<DialogContentBaseProps> = ({margin: _margin, ...props}) => (
  <div
    {...props}
  />
)

const DialogContent = styled(DialogContentBase)(({margin}) => ({
  '& > *:first-child': {
    marginBlockStart: 0,
    marginTop: 0,
  },
  overflowY: 'auto',
  marginBlockEnd: margin ? 'calc(var(--clear-unit) * 3)' : ''
}))

const DialogButtons = styled('div')({
  display: 'flex',
  flexDirection: 'row-reverse',
  flexShrink: 0,
  '& button': {
    marginLeft: 'calc(var(--clear-unit) / 2)',
    marginRight: 'calc(var(--clear-unit) / 2)',
  }
})

const BackupButton = styled(DialogButtons)({
  display: 'none',
  marginBlockStart: 'calc(var(--clear-unit) * 3)',
  [media.breakpoints.xs.down]: {
    display: 'flex',
  }
})

/**
 * A simple responsive modal with optional action buttons
 *
 * https://chadlavi.github.io/clear/#/dialog
 */
export const Dialog: React.FC<DialogProps> = (props: DialogProps) => {

  const {
    actions,
    disableClickAway,
    open,
    setOpen,
    header,
    ...other
  } = props

  const handleOnKeyDown = (e: KeyboardEvent): void => {
    if (e.keyCode === 27 || e.key === 'Escape') {
      if (disableClickAway) {
        e.stopPropagation()
      } else {
        setOpen(false)
      }
    }
  }

  const backdropRef = React.useRef<HTMLDivElement>(null)
  const dialogRef = useClickaway<HTMLDivElement>(() => setOpen(false), disableClickAway !== true)

  React.useEffect(() => {
    backdropRef.current?.focus()
    if (open) {
      document.addEventListener('keydown', handleOnKeyDown, true)
      return (): void => {
        document.removeEventListener('keydown', handleOnKeyDown, true)
      }
    }
  }, [open])

  return (
    <>
      {open &&
        <Backdrop
          tabIndex={0}
          ref={backdropRef}
        >
          <DialogBody
            {...other}
            ref={dialogRef}
          >
            <DialogContent
              margin={actions !== undefined}
            >
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
