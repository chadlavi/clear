# Clear

A simple personal Design System

## Releases ![GitHub latest release](https://img.shields.io/github/v/tag/chadlavi/clear?label=latest%20release&sort=semver&color=blue)

See [CHANGELOG.md](CHANGELOG.md)

## Examples

See examples at https://chadlavi.github.io/clear/

## Requirements

Note that Clear requires peers `react` and `styled-components` 

## Contributing

Open [issues](https://github.com/chadlavi/clear/issues) or open PRs directly

## Development

Library source code is in `./src/components`, a simple `create-react-app` 
purposes is in `./playground`

To run development:
```sh
npm run dev
```

Note that `./playground/src/component-lib` is created by the `npm run build`
command (which is run as part of `npm run dev`). You may see ts errors in
`./playground/src/` files before successfully running a build.

To build library:
```sh
npm run build
```

To build docs:
```sh
npm run build-playground
```

To release and update docs:
```sh
bin/release [major | minor | patch]
```
