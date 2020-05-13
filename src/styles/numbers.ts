const unit = 8

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg'

export type Width = 'main' | 'lg' | 'xl'

type Breakpoints = {
  [key in Breakpoint]: number
}

interface Numbers {
  breakpoint: Breakpoints
  fontSize: {[key: string]: number}
  width: {[key: string]: number}
  unit: number
}

const width: {[key in Width]: number} = {
  main: 95 * unit,
  lg: unit ** 3 * 2,
  xl: unit ** 3 * 4,
}

export const numbers: Numbers = {
  breakpoint: {
    xs: 600,
    sm: 960,
    md: 1280,
    lg: 1920,
  },
  fontSize: {
    default: unit * 2,
    label: unit * 1.75,
  },
  width,
  unit,
}
