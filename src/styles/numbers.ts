const unit = 8

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg'


type Breakpoints = {
  [key in Breakpoint]: number
}

interface Numbers {
  breakpoint: Breakpoints
  fontSize: {[key: string]: number}
  width: {[key: string]: number}
  unit: number
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
    label: unit * 1.8,
  },
  width: {
    main: 95 * unit,
  },
  unit,
}
