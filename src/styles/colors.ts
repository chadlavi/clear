export type Themes = 'light' | 'dark'

export type Colors = 'background' |
'blue' |
'border' |
'error' |
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
    link: '#55e',
    textColor: '#111',
    violet: '#bc1abc',
    zebra: '#f8f8f8',
  },
  dark: {
    background: '#111',
    blue: 'dodgerblue',
    border: '#555',
    error: '#ff5656',
    link: '#8787f9',
    textColor: 'white',
    violet: 'violet',
    zebra: '#242424',
  }
} as const
