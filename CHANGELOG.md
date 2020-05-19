# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- `<Video />`

## [0.14.2] - 2020-05-16
### Added
- fixed CSS class name for disabled `<Button>`

## [0.14.1] - 2020-05-16
### Added
- fixed CSS class names for
  - `<Button>`
  - `<Checkbox />`
  - `<Input />`
  - `<Label />`
  - `<Notification>`
- add an `onKeyDown` wrapper to `<Notification>` to dismiss on `esc` key press
- 

## [0.14.0] - 2020-05-15
### Added
- `<List>`
- `<ListItem>`
- breakpoints export
- exported helper functions
  - `makeMediaQuery`
  - `underXs` ... `underLg`
  - `overXs` ... `overLg`

## [0.13.2] - 2020-05-13
### Added
- export utils
### Changed
- refactor internal base components to avoid eslint-disable comments

## [0.13.1] - 2020-05-12
### Added
- `complimentaryColors` dict

## [0.13.0] - 2020-05-12
### Added
- `<Page>` `size` prop

## [0.12.1] - 2020-05-12
### Changed
- color
  - dark mode
    - zebra

## [0.12.0] - 2020-05-11
### Added
- success state for `<Notification>`
- color
  - green
### Changed
- color
  - dark mode more muted:
    - background color
    - error
    - link
- padding responsive to text size in `<Code>`
- default timeout for `<Notification>` changed from 1500ms to 2000ms
### Fixed
- missing JSDoc comments

## [0.11.2] - 2020-05-11
### Changed
- more mobile-friendly padding for `<Notification>` wrapper

## [0.11.1] - 2020-05-10
### Fixed
- text color for `<Button>`

## [0.11.0] - 2020-05-10
### Added
- `<Notification>`
### Fixed
- missing JSDoc comments

## [0.10.2] - 2020-05-10
### Fixed
- responsive color use in svg for selected `<Radio />`

## [0.10.1] - 2020-05-10
### Fixed
- `<Radio />` styling for Safari

## [0.10.0] - 2020-05-09
### Added
- `<Checkbox />`
- `<Radio />`
- disabled styling for `<Select>`

## [0.9.1] - 2020-05-07
### Fixed
- `<Select multiple ...>` onChange behavior

## [0.9.0] - 2020-05-05
### Added
- `<GenerateTable />`

## [0.8.0] - 2020-05-05
### Added
- `<Select>`

## [0.7.1] - 2020-05-04
### Changed
- make `<GridItem>` more flexible (esp when the `as` prop is used)
- make `<TableCell>` styling within a `<TableHead>` easier

## [0.7.0] - 2020-05-04
### Added
- `<Label>`
- `<Skiplink>`

### Changed
- Remove nested `<label>` from `<Input>` (to use the new `<Label>`)

## [0.6.4] - 2020-05-03
### Fixed
- accessibility of `<Input>`

## [0.6.3] - 2020-05-01
### Fixed
- prevent iOS devices from messing with text size

## [0.6.2] - 2020-05-01
### Fixed
- max width of `<GridItem>`

## [0.6.1] - 2020-04-30
### Added
- hashlinks in documentation

### Changed
- Separated `<CSSVariables />` and `<GlobalStyles />`

## [0.6.0] - 2020-04-30
### Added
- `<ScrollContainer>`
- colors: 
  - blue
  - violet
- React hook `useBreakpoint(breakpoint: Breakpoint) => boolean`

### Changed
- iteratively add global color variables from definition instead of manually adding them

## [0.5.2] - 2020-04-28
### Changed
- `<CodeBlock>` margins
- more React hooks

## [0.5.1] - 2020-04-28
### Added
- linting

## [0.5.0] - 2020-04-28
### Added
- React hooks

### Changed
- dark mode link color

### Removed
- `<Email>` link

## [0.4.0] - 2020-04-27
### Added
- `<Email>` link

## [0.3.1] - 2020-04-72
### Fixed
- fix default margin for `<Paragraph>`

## [0.3.0] - 2020-04-27
### Added
- `margins` prop on `<Paragraph>`

## [0.2.1] - 2020-04-27
### Added
- theme font families

## [0.2.0] - 2020-04-26
### Added
- `<CodeBlock>`
- JSDoc comments
- error focus style

## [0.1.0] - 2020-04-26
### Added
- `<Button>`
- `<Code>`
- `<Header>`
- `<Paragraph>`
-github pages docs site

## [0.0.4] - 2020-04-26
### Fixed
- no flex on `<GridItem>`

## [0.0.3] - 2020-04-26
### Fixed
- don't dynamtically generate styles for grid

## [0.0.2] - 2020-04-26
### Added
- first version published