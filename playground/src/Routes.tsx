import * as React from 'react'
import {version} from '../package.json'
import {
  ButtonPage,
  ColorsPage,
  GettingStartedPage,
  GlobalStylesPage,
  HelpersPage,
  HomePage,
  InputPage,
  LayoutPage,
  LinkPage,
  NotificationPage,
  TablePage,
  TextPage,
} from './Pages'
import {
  Grid,
  GridItem,
  Link,
  Page,
  SkipLink,
} from './component-lib'
import {
  HashRouter,
  NavLink,
  Route,
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
    label: 'Colors',
    route: '/colors',
    component: <ColorsPage />,
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
    label: 'Notifications',
    route: '/notification',
    component: <NotificationPage />,
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
      <HashRouter basename='/'>
        <SkipLink id={'main'} />
        <Grid spacing={16}>
          <GridItem as='nav' aria-label='primary'>
            {routes.map((r, i) =>
              <React.Fragment key={r.label}>
                <Link
                  as={NavLink}
                  to={r.route}
                  exact={r.exact}
                >
                  {r.label}
                </Link>
                {i !== routes.length - 1 ? ' \u00b7 ' : ''}
              </React.Fragment>
            )}
          </GridItem>
          <GridItem>
            <span tabIndex={-1} id='main' />
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
              <Route>
                <HomePage/>
              </Route>
            </Switch>
          </GridItem>
        </Grid>
      </HashRouter>
    </Page>
  )
}
