export type Themes = 'light' | 'dark'

export type Colors = 'background' |
'blue' |
'border' |
'error' |
'green' |
'link' |
'textColor' |
'violet' |
'zebra'

export const colors: {[key in Themes]: {[key in Colors]: string}} = {
  light: {
    background: 'white',
    blue: '#005cb8',
    border: '#ddd',
    error: '#cf0303',
    green: '#067940',
    link: '#55e',
    textColor: '#111',
    violet: '#bc1abc',
    zebra: '#f8f8f8',
  },
  dark: {
    background: '#0a0a0a',
    blue: 'dodgerblue',
    border: '#555',
    error: '#f99',
    green: '#40bf80',
    link: '#9e9efa',
    textColor: 'white',
    violet: 'violet',
    zebra: '#1a1a1a',
  }
} as const

export const complimentaryColors: {[key in Themes]: {[key in Colors]: string}} = {
  light: {
    background: colors.light.textColor,
    blue: colors.light.background,
    border: colors.light.textColor,
    error: colors.light.background,
    green: colors.light.background,
    link: colors.light.background,
    textColor: colors.light.background,
    violet: colors.light.background,
    zebra: colors.light.textColor,
  },
  dark: {
    background: colors.dark.textColor,
    blue: colors.dark.background,
    border: colors.dark.textColor,
    error: colors.dark.background,
    green: colors.dark.background,
    link: colors.dark.background,
    textColor: colors.dark.background,
    violet: colors.dark.background,
    zebra: colors.dark.textColor,
  }
}
