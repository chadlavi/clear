import * as React from 'react'
import {version} from '../package.json'
import {
  ButtonPage,
  GettingStartedPage,
  GlobalStylesPage,
  HelpersPage,
  HomePage,
  InputPage,
  LayoutPage,
  LinkPage,
  TablePage,
  TextPage,
} from './Pages'
import {
  Grid,
  GridItem,
  Link,
  Page,
} from './component-lib'
import {
  Route,
  HashRouter as Router,
  Link as RouterLink,
  Switch
} from 'react-router-dom'

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
  },
  {
    label: 'Helpers',
    route: '/helpers',
    component: <HelpersPage />,
  },
]

export const Routes: React.FC = () =>
  <Page>
    <Router basename='/'>
      <Grid spacing={16}>
        <GridItem>
          {routes.map((r, i) =>
            <React.Fragment key={r.label}>
              <Link
                as={RouterLink}
                to={r.route}
              >
                {r.label}
              </Link>
              {i !== routes.length - 1 ? ' \u00b7 ' : ''}
            </React.Fragment>
          )}
        </GridItem>
        <GridItem>
          <Switch>
            {routes.map((r) =>
              <Route
                key={r.label}
                exact
                path={r.route}
              >
                {r.component}
              </Route>
            )}
          </Switch>
        </GridItem>
      </Grid>
    </Router>
  </Page>

