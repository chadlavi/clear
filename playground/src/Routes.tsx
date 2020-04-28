import * as React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from 'react-router-dom'
import {
  Link,
  Page,
  GridItem,
  Grid,
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
  GettingStartedPage,
} from './Pages'
import {version} from '../package.json'

const routes = [
  {
    label: `Clear (${version})`,
    exact: true,
    route: '/',
    component: <HomePage />,
  },
  {
    label: 'Getting started',
    route: '/start',
    component: <GettingStartedPage />,
  },
  {
    label: 'Globals',
    route: '/global-styles',
    component: <GlobalStylesPage />,
  },
  {
    label: 'Layout',
    route: '/layout',
    component: <LayoutPage />,
  },
  {
    label: 'Input',
    route: '/input',
    component: <InputPage />,
  },
  {
    label: 'Button',
    route: '/button',
    component: <ButtonPage />,
  },
  {
    label: 'Link',
    route: '/link',
    component: <LinkPage />,
  },
  {
    label: 'Text',
    route: '/text',
    component: <TextPage />,
  },
  {
    label: 'Table',
    route: '/table',
    component: <TablePage />,
  }
]

export const Routes = () => (
  <Page>
    <Router basename='/'>
      <Grid spacing={16}>
        <GridItem>
          {routes.map((r, i) => (
            <React.Fragment key={r.label}>
              <Link
                as={RouterLink}
                to={r.route}
              >
                {r.label}
              </Link>
              {i !== routes.length - 1 ? ' \u00b7 ' : ''}
            </React.Fragment>
          ))}
        </GridItem>
        <GridItem>
          <Switch>
            {routes.map((r) => (
              <Route
                key={r.label}
                exact
                path={r.route}
              >
                {r.component}
              </Route>
            ))}
          </Switch>
        </GridItem>
      </Grid>
    </Router>
  </Page>
)
