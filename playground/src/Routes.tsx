import * as React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from 'react-router-dom'
import {
  Link,
  GlobalStyles,
  Page,
  GridItem,
  Grid,
  CSSVariables,
} from './component-lib'
import {
  InputPage,
  HomePage,
  GlobalStylesPage,
  LayoutPage,
  LinkPage,
  TablePage,
  ButtonPage,
  TextPage,
} from './Pages'
import {version} from '../package.json'

const routes = [
  {
    label: `Clear (${version})`,
    route: '/',
  },
  {
    label: 'Global styles',
    route: '/global-styles',
  },
  {
    label: 'Layout',
    route: '/layout',
  },
  {
    label: 'Input',
    route: '/input',
  },
  {
    label: 'Button',
    route: '/button',
  },
  {
    label: 'Links',
    route: '/link',
  },
  {
    label: 'Text formatting',
    route: '/text',
  },
  {
    label: 'Table',
    route: '/table',
  }
]

export const Routes = () => (
  <>
  <CSSVariables />
  <GlobalStyles />
  <Page>
    <Router basename='/'>
      <Grid spacing={16}>
        <GridItem>
          {routes.map((r, i) => (
            <>
              <Link
                key={r.label}
                as={RouterLink}
                to={r.route}
              >
                {r.label}
              </Link>
              {i !== routes.length - 1 ? ' \u00b7 ' : ''}
            </>
          ))}
        </GridItem>
        <GridItem>
          <Switch>
            <Route exact path={'/'}>
              <HomePage />
            </Route>
            <Route exact path={'/global-styles'}>
              <GlobalStylesPage />
            </Route>
            <Route exact path={'/layout'}>
              <LayoutPage />
            </Route>
            <Route exact path={'/input'}>
              <InputPage />
            </Route>
            <Route exact path={'/button'}>
              <ButtonPage />
            </Route>
            <Route exact path={'/link'}>
              <LinkPage />
            </Route>
            <Route exact path={'/text'}>
              <TextPage />
            </Route>
            <Route exact path={'/table'}>
              <TablePage />
            </Route>
          </Switch>
        </GridItem>
      </Grid>
    </Router>
  </Page>
  </>
)
