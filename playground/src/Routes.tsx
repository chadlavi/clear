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
  Switch,
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

export const Routes: React.FC = () => {

  const scrollinate = async (id: string): Promise<void> => {
    const anchor = document.getElementById(id)
    if (anchor) anchor.scrollIntoView(true)
  }

  /**
   * Scroll to the designated anchor if one is present in the URL.
   */
  const scrollToHash = async (): Promise<void> => {
    window.location.hash = window.location.hash.replace('%23', '#')
    const hash = window.location.hash
    const id = hash.substr(1).split('#')[1]
    if(id) {
      setTimeout(async () => {
        await scrollinate(id)
      }, 1)
    }
  }

  React.useEffect(() => {
    scrollToHash()
  })

  return (
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
  )
}
