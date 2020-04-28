export type Themes = 'light' | 'dark'

export type Colors = 'background' |
'border' |
'error' |
'link' |
'textColor' |
'zebra'

export const colors: {[key in Themes]: {[key in Colors]: string}} = {
  light: {
    background: 'white',
    border: '#ddd',
    error: '#cf0303',
    link: '#55e',
    textColor: '#111',
    zebra: '#f8f8f8',
  },
  dark: {
    background: '#111',
    border: '#555',
    error: '#ff5656',
    link: '#8787f9',
    textColor: 'white',
    zebra: '#242424',
  }
} as const
