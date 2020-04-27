export const focusStyle = `
:focus {
  outline: none;
  box-shadow: 0 0 0 calc(var(--clear-unit) / 4) var(--clear-background), 0 0 0 calc(var(--clear-unit) / 2) var(--clear-link);
}
`
export const errorFocusStyle = `
:focus {
  outline: none;
  box-shadow: 0 0 0 calc(var(--clear-unit) / 4) var(--clear-background), 0 0 0 calc(var(--clear-unit) / 2) var(--clear-error);
}
`