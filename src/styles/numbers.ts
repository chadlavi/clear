const unit = 8

export default {
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
    main: 90 * unit,
  },
  unit,
} as const
