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
  | 'green'
  | 'grey'
  | 'link'
  | 'orange'
  | 'purple'
  | 'red'
  | 'textColor'
  | 'violet'
  | 'yellow'
  | 'zebra'

export const colors: {[key in Themes]: {[key in Colors]: string}} = {
  light: {
    background: 'white',
    zebra: '#f8f8f8',
    border: '#ddd',
    grey: stripeColors.grey,
    textColor: '#111',
    violet: stripeColors.violet,
    purple: stripeColors.purple,
    cyan: stripeColors.cyan,
    link: stripeColors.blue,
    blue: stripeColors.blue,
    green: stripeColors.green,
    yellow: stripeColors.yellow,
    orange: stripeColors.orange,
    red: stripeColors.red,
  },
  dark: {
    red: stripeColorsDark.red,
    orange: stripeColorsDark.orange,
    yellow: stripeColorsDark.yellow,
    green: stripeColorsDark.green,
    blue: stripeColorsDark.blue,
    link: stripeColorsDark.blue,
    cyan: stripeColorsDark.cyan,
    purple: stripeColorsDark.purple,
    violet: stripeColorsDark.violet,
    background: '#0a0a0a',
    zebra: '#1a1a1a',
    border: '#555',
    grey: stripeColorsDark.grey,
    textColor: 'white',
  }
} as const

export const complimentaryColors: {[key in Themes]: {[key in Colors]: string}} = {
  light: {
    background: colors.light.textColor,
    blue: colors.light.background,
    border: colors.light.textColor,
    cyan: colors.light.background,
    green: colors.light.background,
    grey: colors.light.background,
    link: colors.light.background,
    orange: colors.light.background,
    purple: colors.light.background,
    red: colors.light.background,
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
    green: colors.dark.background,
    grey: colors.dark.background,
    link: colors.dark.background,
    orange: colors.dark.background,
    purple: colors.dark.background,
    red: colors.dark.background,
    textColor: colors.dark.background,
    violet: colors.dark.background,
    yellow: colors.dark.background,
    zebra: colors.dark.textColor,
  }
}
