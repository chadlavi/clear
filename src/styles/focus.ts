export const focusStyle = `
:focus {
  outline: none;
  box-shadow: 0 0 0 calc(var(--clear-unit) / 4) var(--clear-background),
    0 0 0 calc(var(--clear-unit) / 2) var(--clear-link);
}
::-moz-focus-inner {
  border:0;
}
`
export const errorFocusStyle = `
:focus {
  outline: none;
  box-shadow: 0 0 0 calc(var(--clear-unit) / 4) var(--clear-background),
    0 0 0 calc(var(--clear-unit) / 2) var(--clear-red);
}
::-moz-focus-inner {
  border:0;
}
`

export const focusStyleJSS = {
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 calc(var(--clear-unit) / 4) var(--clear-background),
      0 0 0 calc(var(--clear-unit) / 2) var(--clear-link)`,
  },
  '::-moz-focus-inner': {
    border: 0,
  }
}

export const errorFocusStyleJSS = {
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 calc(var(--clear-unit) / 4) var(--clear-background),
    0 0 0 calc(var(--clear-unit) / 2) var(--clear-red)`
  },
  '::-moz-focus-inner': {
    border: 0,
  },
}
