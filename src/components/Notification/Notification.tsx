import * as React from 'react'
import styled from 'styled-components'
import {
  Button,
  ButtonProps,
} from '..'

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional props to pass to the dismiss button
   */
  buttonProps?: ButtonProps
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

const NotificationBase = (
  {buttonProps: _buttonProps, dismissible: _dismissible, error: _error, mini: _mini,
    success: _success, timeOut: _timeOut, transient: _transient, ...props}:
  Omit<NotificationProps, 'open' | 'setOpen'>
): JSX.Element => (
  <div
    {...props}
  />
)

const NotificationWrapper = styled(NotificationBase)`
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
  background: var(--clear-${(p): string => p.error ? 'error' : p.success ? 'green' : 'link'});
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
  color: var(--clear-background);
  flex-grow: 1;
  text-align: ${(p): string => p.mini ? 'center' : 'left'};
  ${(p): string => (p.mini || p.dismissible === false) ? '' : 'margin-right: calc(var(--clear-unit) * 2);'}
`

interface DismissButtonProps extends ButtonProps {
  error?: boolean
  success?: boolean
}

const DismissButtonBase = (
  {error: _error, success: _success, ...props}: DismissButtonProps
): JSX.Element => <Button {...props} />

const DismissButton = styled(DismissButtonBase)`
  background: none;
  border: 1px solid var(--clear-background);
  color: var(--clear-background);
  :focus {
    box-shadow: 0 0 0 calc(var(--clear-unit) / 4) var(--clear-${
  (p): string => p.error ? 'error' : p.success ? 'green' : 'link'
}),
    0 0 0 calc(var(--clear-unit) / 2) var(--clear-background);
  }
`

/**
 * Use a `<Notification>` to show users a short, timely message that might
 * automatically disappear and that the user may be able to manually dismiss (or both).
 *
 * https://chadlavi.github.io/clear/#/notification
 */
export const Notification = (props: NotificationProps): JSX.Element => {
  const {
    buttonProps,
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

  return (
    <>
      { open ?
        <NotificationWrapper>
          <StyledNotification
            className={'notification'}
            error={error}
            mini={mini}
            success={success}
            {...other}
          >
            <NotificationContent
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
