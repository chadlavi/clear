# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- `color?: Colors` prop added to `<Notification>`
### Changed
- Give `<Button>` same size/padding/border/margin as inputs so they line up nicely side by side
- Change how `complimentaryColor` works
- Change `<Dialog>` spacing to accommodate new `<Button>` styling

## [0.17.1]
### Changed
- Color
  - `error` renamed to `red`

## [0.16.1]
### Changed
- `ButtonProps` now extends `React.ButtonHTMLAttributes<HTMLButtonElement>`
  instead of `React.HTMLAttributes<HTMLButtonElement>`

## [0.16.0]
### Added
- `destructive?: boolean` prop on `<Button>`
- `<Dialog>`
- Colors
  - `grey`
  - `orange`
  - `yellow`
  - `purple`
### Changed
- Colors
  - `blue`
  - `link`
  - `violet`
  - `green`
  - `error`

## [0.15.0]
### Added
- `<Video />`
### Changed
- Don't bold text on buttons in dark mode

## [0.14.2] - 2020-05-16
### Added
- Fixed CSS class name for disabled `<Button>`

## [0.14.1] - 2020-05-16
### Added
- Fixed CSS class names for
  - `<Button>`
  - `<Checkbox />`
  - `<Input />`
  - `<Label />`
  - `<Notification>`
- Add an `onKeyDown` wrapper to `<Notification>` to dismiss on `esc` key press
- 

## [0.14.0] - 2020-05-15
### Added
- `<List>`
- `<ListItem>`
- `breakpoints` export
- Exported helper functions
  - `makeMediaQuery`
  - `underXs` ... `underLg`
  - `overXs` ... `overLg`

## [0.13.2] - 2020-05-13
### Added
- Export utils
### Changed
- Refactor internal base components to avoid eslint-disable comments

## [0.13.1] - 2020-05-12
### Added
- `complimentaryColors` dict

## [0.13.0] - 2020-05-12
### Added
- `<Page>` `size` prop

## [0.12.1] - 2020-05-12
### Changed
- Color
  - Dark mode
    - `zebra`

## [0.12.0] - 2020-05-11
### Added
- Success state for `<Notification>`
- Color
  - `green`
### Changed
- Color
  - Dark mode more muted:
    - `background`
    - `error`
    - `link`
- Padding responsive to text size in `<Code>`
- Default timeout for `<Notification>` changed from 1500ms to 2000ms
### Fixed
- Missing JSDoc comments

## [0.11.2] - 2020-05-11
### Changed
- More mobile-friendly padding for `<Notification>` wrapper

## [0.11.1] - 2020-05-10
### Fixed
- Text color for `<Button>`

## [0.11.0] - 2020-05-10
### Added
- `<Notification>`
### Fixed
- Missing JSDoc comments

## [0.10.2] - 2020-05-10
### Fixed
- Responsive color use in svg for selected `<Radio />`

## [0.10.1] - 2020-05-10
### Fixed
- `<Radio />` styling for Safari

## [0.10.0] - 2020-05-09
### Added
- `<Checkbox />`
- `<Radio />`
- Disabled styling for `<Select />`

## [0.9.1] - 2020-05-07
### Fixed
- `<Select multiple ... />` onChange behavior

## [0.9.0] - 2020-05-05
### Added
- `<GenerateTable />`

## [0.8.0] - 2020-05-05
### Added
- `<Select />`

## [0.7.1] - 2020-05-04
### Changed
- Make `<GridItem>` more flexible (esp when the `as` prop is used)
- Make `<TableCell>` styling within a `<TableHead>` easier

## [0.7.0] - 2020-05-04
### Added
- `<Label>`
- `<Skiplink />`

### Changed
- Remove nested `<label>` from `<Input />` (to use the new `<Label>`)

## [0.6.4] - 2020-05-03
### Fixed
- Accessibility of `<Input />`

## [0.6.3] - 2020-05-01
### Fixed
- Prevent iOS devices from messing with text size

## [0.6.2] - 2020-05-01
### Fixed
- Max width of `<GridItem>`

## [0.6.1] - 2020-04-30
### Added
- Hashlinks in documentation

### Changed
- Separated `<CSSVariables />` and `<GlobalStyles />`

## [0.6.0] - 2020-04-30
### Added
- `<ScrollContainer>`
- Colors: 
  - `blue`
  - `violet`
- React hook `useBreakpoint(breakpoint: Breakpoint) => boolean`

### Changed
- Iteratively add global color variables from definition instead of manually adding them

## [0.5.2] - 2020-04-28
### Changed
- `<CodeBlock>` margins
- More React hooks

## [0.5.1] - 2020-04-28
### Added
- Linting

## [0.5.0] - 2020-04-28
### Added
- React hooks

### Changed
- Dark mode link color

### Removed
- `<Email>` link

## [0.4.0] - 2020-04-27
### Added
- `<Email>` link

## [0.3.1] - 2020-04-72
### Fixed
- Fix default margin for `<Paragraph>`

## [0.3.0] - 2020-04-27
### Added
- `margins` prop on `<Paragraph>`

## [0.2.1] - 2020-04-27
### Added
- Theme font families

## [0.2.0] - 2020-04-26
### Added
- `<CodeBlock>`
- JSDoc comments
- Error focus style

## [0.1.0] - 2020-04-26
### Added
- `<Button>`
- `<Code>`
- `<Header>`
- `<Paragraph>`
-github pages docs site

## [0.0.4] - 2020-04-26
### Fixed
- No flex on `<GridItem>`

## [0.0.3] - 2020-04-26
### Fixed
- Don't dynamtically generate styles for grid

## [0.0.2] - 2020-04-26
### Added
- First version published

[unreleased]: https://github.com/chadlavi/clear/compare/v0.17.1...HEAD
[0.17.1]: https://github.com/chadlavi/clear/compare/v0.16.1...v0.17.1
[0.16.1]: https://github.com/chadlavi/clear/compare/v0.16.0...v0.16.1
[0.16.0]: https://github.com/chadlavi/clear/compare/v0.15.0...v0.16.0
[0.15.0]: https://github.com/chadlavi/clear/compare/v0.14.2...v0.15.0
[0.14.2]: https://github.com/chadlavi/clear/compare/v0.14.1...v0.14.2
[0.14.1]: https://github.com/chadlavi/clear/compare/v0.14.0...v0.14.1
[0.14.0]: https://github.com/chadlavi/clear/compare/v0.13.2...v0.14.0
[0.13.2]: https://github.com/chadlavi/clear/compare/v0.13.1...v0.13.2
[0.13.1]: https://github.com/chadlavi/clear/compare/v0.13.0...v0.13.1
[0.13.0]: https://github.com/chadlavi/clear/compare/v0.12.1...v0.13.0
[0.12.1]: https://github.com/chadlavi/clear/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/chadlavi/clear/compare/v0.11.2...v0.12.0
[0.11.2]: https://github.com/chadlavi/clear/compare/v0.11.1...v0.11.2
[0.11.1]: https://github.com/chadlavi/clear/compare/v0.11.0...v0.11.1
[0.11.0]: https://github.com/chadlavi/clear/compare/v0.10.2...v0.11.0
[0.10.2]: https://github.com/chadlavi/clear/compare/v0.10.1...v0.10.2
[0.10.1]: https://github.com/chadlavi/clear/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/chadlavi/clear/compare/v0.9.1...v0.10.0
[0.9.1]: https://github.com/chadlavi/clear/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/chadlavi/clear/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/chadlavi/clear/compare/v0.7.1...v0.8.0
[0.7.1]: https://github.com/chadlavi/clear/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/chadlavi/clear/compare/v0.6.4...v0.7.0
[0.6.4]: https://github.com/chadlavi/clear/compare/v0.6.3...v0.6.4
[0.6.3]: https://github.com/chadlavi/clear/compare/v0.6.2...v0.6.3
[0.6.2]: https://github.com/chadlavi/clear/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/chadlavi/clear/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/chadlavi/clear/compare/v0.5.2...v0.6.0
[0.5.2]: https://github.com/chadlavi/clear/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/chadlavi/clear/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/chadlavi/clear/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/chadlavi/clear/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/chadlavi/clear/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/chadlavi/clear/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/chadlavi/clear/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/chadlavi/clear/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/chadlavi/clear/compare/v0.0.4...v0.1.0
[0.0.4]: https://github.com/chadlavi/clear/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/chadlavi/clear/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/chadlavi/clear/releases/tag/v0.0.2