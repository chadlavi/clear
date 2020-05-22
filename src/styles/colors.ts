export const stripeColors = {
  grey: 'rgb(103, 116, 133)',
  blue: 'rgb(77, 107, 213)',
  cyan: 'rgb(0, 124, 182)',
  green: 'rgb(12, 128, 94)',
  yellow: 'rgb(188, 84, 17)',
  orange: 'rgb(197, 75, 54)',
  red: 'rgb(205, 62, 99)',
  purple: 'rgb(163, 84, 178)',
  violet: 'rgb(127, 99, 192)',
}

export const stripeColorsDark = {
  grey: 'rgb(198, 196, 207)',
  blue: 'rgb(119, 141, 223)',
  cyan: 'rgb(75, 167, 210)',
  green: 'rgb(29, 159, 120)',
  yellow: 'rgb(233, 201, 114)',
  orange: 'rgb(237, 133, 115)',
  red: 'rgb(215, 101, 131)',
  purple: 'rgb(200, 153, 209)',
  violet: 'rgb(163, 143, 209)',
}

export type Themes = 'light' | 'dark'

export type Colors = 'background'
  | 'blue'
  | 'border'
  | 'cyan'
  | 'error'
  | 'green'
  | 'grey'
  | 'link'
  | 'orange'
  | 'purple'
  | 'textColor'
  | 'violet'
  | 'yellow'
  | 'zebra'

export const colors: {[key in Themes]: {[key in Colors]: string}} = {
  light: {
    background: 'white',
    blue: stripeColors.blue,
    border: '#ddd',
    cyan: stripeColors.cyan,
    error: stripeColors.red,
    green: stripeColors.green,
    grey: stripeColors.grey,
    link: stripeColors.blue,
    orange: stripeColors.orange,
    purple: stripeColors.purple,
    textColor: '#111',
    violet: stripeColors.violet,
    yellow: stripeColors.yellow,
    zebra: '#f8f8f8',
  },
  dark: {
    background: '#0a0a0a',
    blue: stripeColorsDark.blue,
    border: '#555',
    cyan: stripeColorsDark.cyan,
    error: stripeColorsDark.red,
    green: stripeColorsDark.green,
    grey: stripeColorsDark.grey,
    link: stripeColorsDark.blue,
    orange: stripeColorsDark.orange,
    purple: stripeColorsDark.purple,
    textColor: 'white',
    violet: stripeColorsDark.violet,
    yellow: stripeColorsDark.yellow,
    zebra: '#1a1a1a',
  }
} as const

export const complimentaryColors: {[key in Themes]: {[key in Colors]: string}} = {
  light: {
    background: colors.light.textColor,
    blue: colors.light.background,
    border: colors.light.textColor,
    cyan: colors.light.background,
    error: colors.light.background,
    green: colors.light.background,
    grey: colors.light.background,
    link: colors.light.background,
    orange: colors.light.background,
    purple: colors.light.background,
    textColor: colors.light.background,
    violet: colors.light.background,
    yellow: colors.light.background,
    zebra: colors.light.textColor,
  },
  dark: {
    background: colors.dark.textColor,
    blue: colors.dark.background,
    border: colors.dark.textColor,
    cyan: colors.dark.background,
    error: colors.dark.background,
    green: colors.dark.background,
    grey: colors.dark.background,
    link: colors.dark.background,
    orange: colors.dark.background,
    purple: colors.dark.background,
    textColor: colors.dark.background,
    violet: colors.dark.background,
    yellow: colors.dark.background,
    zebra: colors.dark.textColor,
  }
}
