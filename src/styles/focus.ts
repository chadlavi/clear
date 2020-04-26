import colors from './colors'

export default `
:focus {
  outline: none;
  box-shadow: 0 0 0 2px ${colors.light.background}, 0 0 0 4px ${colors.light.link};
  @media (prefers-color-scheme: dark) {
    box-shadow: 0 0 0 2px ${colors.dark.background}, 0 0 0 4px ${colors.dark.link};
  }
}`