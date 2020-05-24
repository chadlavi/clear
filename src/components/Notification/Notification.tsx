import * as React from 'react'
import styled from 'styled-components'
import {useClickaway} from '../../utils'
import {Button, ButtonProps} from '../Button'
import {Colors, complimentaryColors} from '../../styles'

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional props to pass to the dismiss button
   */
  buttonProps?: ButtonProps
  /**
   * The background color of the notification
   */
  color?: Colors
  /**
   * If true or undefined, a dismiss button will be shown that the user can use to manually dismiss
   * the Notification.
   */
  dismissible?: boolean
  /**
   * If true, the Notification will be styled with error coloring
   */
  error?: boolean
  /**
   * Control whether or not the Notification is open
   */
  open: boolean
  /**
   * If true, the notification will be narrower, with centered text, and a dismiss button will not
   * be shown regardless of the value of `dismissible`.
   */
  mini?: boolean
  /**
   * Pass a function to set the value of `open` to this prop
   */
  setOpen: React.Dispatch<React.SetStateAction<boolean>> | (() => void)
  /**
   * If true, the Notification will be styled with success coloring
   */
  success?: boolean
  /**
   * Overrides the default timeout duration of a transient Notification. Defaults to 1500ms.
   */
  timeOut?: number
  /**
   * If true, the Notification will self-dismiss after either 1500ms or the number of milliseconds passed
   * to `timeOut`.
   *
   * Note: this prop and `dismissible` can be used together.
   */
  transient?: boolean
}

const DEFAULT_COLOR: Colors = 'blue'

const setColor = (p: {color?: Colors; error?: boolean; success?: boolean}): string => {
  if (p.error) return 'red'
  if (p.success) return 'green'
  if (p.color) return p.color
  return DEFAULT_COLOR
}

const setContrastColor = (color?: Colors): string => {
  return complimentaryColors[color ?? DEFAULT_COLOR]
}

const NotificationBase: React.FC<Partial<NotificationProps>> = ({
  buttonProps: _buttonProps, color: _color, dismissible: _dismissible, error: _error, mini: _mini, open: _open,
  setOpen: _setOpen, success: _success, timeOut: _timeOut, transient: _transient, ...props
}) => <div {...props} />

const NotificationWrapper = styled.div`
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  max-width: 100%;
  padding: calc(var(--clear-unit) * 2);
  pointer-events: none;
  position: fixed;
  width: 100%;
  z-index: 1500;
`

const StyledNotification = styled(NotificationBase)`
  align-items: center;
  background: var(--clear-${(p): string => setColor(p)});
  border-radius: var(--clear-font-size-default);
  display: flex;
  font-size: var(--clear-font-size-default);
  font-style: normal;
  font-weight: normal;
  justify-content: space-between;
  max-width: ${(p): string => p.mini ? 'calc(var(--clear-unit) * 24)' : '100%'};
  padding: var(--clear-font-size-default);
  pointer-events: auto;
  width: ${(p): string => p.mini ? 'unset' : 'calc(var(--clear-unit) * 64)'};
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: 0.1s ease-out 0s 1 slideInFromBottom;
`

const NotificationContent = styled(NotificationBase)`
  color: var(--clear-${(p): string => setContrastColor(p.color)});
  flex-grow: 1;
  text-align: ${(p): string => p.mini ? 'center' : 'left'};
  ${(p): string => (p.mini || p.dismissible === false) ? '' : 'margin-right: calc(var(--clear-unit) * 2);'}
`

interface DismissButtonProps extends ButtonProps {
  error?: boolean
  success?: boolean
  color?: Colors
}

const DismissButtonBase: React.FC<DismissButtonProps> = ({
  color: _color, error: _error, success: _success, ...props
}) => <Button {...props} />

const DismissButton = styled(DismissButtonBase)`
  background: none;
  margin: 0;
  height: auto;
  border: 1px solid var(--clear-${(p): string => setContrastColor(p.color)});
  color: var(--clear-${(p): string => setContrastColor(p.color)});
  :focus {
    box-shadow: 0 0 0 calc(var(--clear-unit) / 4) var(--clear-${(p): string => setColor(p)}),
    0 0 0 calc(var(--clear-unit) / 2) var(--clear-${(p): string => setContrastColor(p.color)});
  }
`

/**
 * Use a `<Notification>` to show users a short, timely message that might
 * automatically disappear and that the user may be able to manually dismiss (or both).
 *
 * https://chadlavi.github.io/clear/#/notification
 */
export const Notification: React.FC<NotificationProps> = (props) => {
  const {
    buttonProps,
    color,
    children,
    dismissible,
    error,
    mini,
    open,
    setOpen,
    success,
    timeOut,
    transient,
    ...other
  } = props

  const onClose = (): void => setOpen(false)

  const transientOnClose = (): void => {
    setTimeout(() => {
      setOpen(false)
    }, timeOut ?? 2000)
  }

  const closeOnEsc = (e: {keyCode: number; key: string}): void => {
    if (e.keyCode === 27 || e.key === 'Escape') {
      onClose()
    }
  }

  const forwardOnKeyDown = (
    f?: (e: React.KeyboardEvent<HTMLDivElement>) => void
  ) => (e: React.KeyboardEvent<HTMLDivElement>): void => {
    closeOnEsc(e)
    if (f) f(e)
  }

  const notificationRef = useClickaway<HTMLDivElement>(onClose, open)

  React.useEffect(() => {
    document.addEventListener('keydown', closeOnEsc, true)
    return (): void => {
      document.removeEventListener('keydown', closeOnEsc, true)
    }
  })


  return (
    <>
      { open ?
        <NotificationWrapper
          ref={notificationRef}
        >
          <StyledNotification
            className={`notification${error ? ' error' : ''}${success ? ' success' : ''}`}
            color={color}
            error={error}
            mini={mini}
            success={success}
            {...other}
            onKeyDown={forwardOnKeyDown(props.onKeyDown)}
          >
            <NotificationContent
              color={color}
              dismissible={dismissible}
              mini={mini}
              className={'notification-content'}
            >
              {children}
            </NotificationContent>
            {(transient && !mini) && transientOnClose()}
            {(mini || dismissible === false)
              ? transientOnClose()
              :  <DismissButton
                {...buttonProps}
                color={color}
                className={'notification-dismiss-button'}
                error={error}
                onClick={buttonProps?.onClick ?? onClose}
                success={success}
              >
                {buttonProps?.children ?? 'Okay'}
              </DismissButton>
            }
          </StyledNotification>
        </NotificationWrapper>
        : undefined
      }
    </>
  )
}
