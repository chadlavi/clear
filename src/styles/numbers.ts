const unit = 8

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg'

export type Width = 'main' | 'lg' | 'xl'

type Breakpoints = {
  [key in Breakpoint]: number
}

const up = (n: number): string => `@media only screen (min-width: ${n}px)`
const down = (n: number): string => `@media only screen (max-width: ${n + 1}px)`

const breakpoints: Breakpoints = {
  xs: 600,
  sm: 960,
  md: 1280,
  lg: 1920,
}

const widths: {[key in Width]: number} = {
  main: 95 * unit,
  lg: unit ** 3 * 2,
  xl: unit ** 3 * 4,
}

interface Numbers {
  breakpoint: Breakpoints
  fontSize: {[key: string]: number}
  width: {[key: string]: number}
  unit: number
}

export const numbers: Numbers = {
  breakpoint: breakpoints,
  fontSize: {
    default: unit * 2,
    label: unit * 1.75,
  },
  width: widths,
  unit,
}

export const media: {
  breakpoints: {
    [key in Breakpoint]: {
      up: string
      down: string
    }
  }
} = {
  breakpoints: {
    xs: {
      up: up(breakpoints.xs),
      down: down(breakpoints.xs),
    },
    sm: {
      up: up(breakpoints.sm),
      down: down(breakpoints.sm),
    },
    md: {
      up: up(breakpoints.md),
      down: down(breakpoints.md),
    },
    lg: {
      up: up(breakpoints.lg),
      down: down(breakpoints.lg),
    },
  }
}

/**
 * returns a CSS string formatted like:
 *
 * ```ts
 * `@media (${minMax}-width: ${breakpoint[width]}px) {
 *  ${styles}
 * }`
 * ```
 *
 * https://chadlavi.github.io/clear/#/helpers#makemediaquery
 */
export const makeMediaQuery = (minMax: 'min' | 'max', width: Breakpoint) => (styles: string): string => (
  `@media (${minMax}-width: ${breakpoints[width]}px) {
    ${styles}
  }`
)

// convenience functions

/**
 * insert a CSS style when the browser is narrower than the XS breakpoint
 *
 * https://chadlavi.github.io/clear/#/helpers#underxs
 */
export const underXs = makeMediaQuery('max', 'xs')
/**
 * insert a CSS style when the browser is narrower than the SM breakpoint
 *
 * https://chadlavi.github.io/clear/#/helpers#undersm
 */
export const underSm = makeMediaQuery('max', 'sm')
/**
 * insert a CSS style when the browser is narrower than the MD breakpoint
 *
 * https://chadlavi.github.io/clear/#/helpers#undermd
 */
export const underMd = makeMediaQuery('max', 'md')
/**
 * insert a CSS style when the browser is narrower than the LG breakpoint
 *
 * https://chadlavi.github.io/clear/#/helpers#underlg
 */
export const underLg = makeMediaQuery('max', 'lg')

/**
 * insert a CSS style when the browser is wider than the XS breakpoint
 *
 * https://chadlavi.github.io/clear/#/helpers#overxs
 */
export const overXs = makeMediaQuery('min', 'xs')
/**
 * insert a CSS style when the browser is wider than the SM breakpoint
 *
 * https://chadlavi.github.io/clear/#/helpers#oversm
 */
export const overSm = makeMediaQuery('min', 'sm')
/**
 * insert a CSS style when the browser is wider than the MD breakpoint
 *
 * https://chadlavi.github.io/clear/#/helpers#overmd
 */
export const overMd = makeMediaQuery('min', 'md')
/**
 * insert a CSS style when the browser is wider than the LG breakpoint
 *
 * https://chadlavi.github.io/clear/#/helpers#overlg
 */
export const overLg = makeMediaQuery('min', 'lg')
