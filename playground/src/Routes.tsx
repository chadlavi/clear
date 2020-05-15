import * as React from 'react'
import {ComponentPage} from './ComponentPage'
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
  ListPage,
  NotificationPage,
  TablePage,
  TextPage,
} from './Pages'
import {
  Grid,
  GridItem,
  Link,
  Page,
  Paragraph,
  SkipLink,
} from './component-lib'
import {
  HashRouter,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom'

const headerRoutes = [
  {
    label: `Clear (${version})`,
    exact: true,
    route: '/',
    component: <ComponentPage content={HomePage} />,
  },
  {
    label: 'Getting started',
    route: '/start',
    component: <ComponentPage title='Getting started' content={GettingStartedPage} />,
  },
]

const routes = [
  {
    label: 'Globals',
    route: '/global-styles',
    component: <ComponentPage title='Globals' content={GlobalStylesPage} />,
  },
  {
    label: 'Colors',
    route: '/colors',
    component: <ComponentPage title='Colors' content={ColorsPage} />,
  },
  {
    label: 'Layout',
    route: '/layout',
    component: <ComponentPage title='Layout' content={LayoutPage} />,
  },
  {
    label: 'List',
    route: '/list',
    component: <ComponentPage title='List' content={ListPage} />,
  },
  {
    label: 'Input',
    route: '/input',
    component: <ComponentPage title='Input' content={InputPage} />,
  },
  {
    label: 'Button',
    route: '/button',
    component: <ComponentPage title='Button' content={ButtonPage} />,
  },
  {
    label: 'Link',
    route: '/link',
    component: <ComponentPage title='Link' content={LinkPage} />,
  },
  {
    label: 'Text',
    route: '/text',
    component: <ComponentPage title='Text' content={TextPage} />,
  },
  {
    label: 'Table',
    route: '/table',
    component: <ComponentPage title='Table' content={TablePage} />,
  },
  {
    label: 'Notification',
    route: '/notification',
    component: <ComponentPage title='Notification' content={NotificationPage} />,
  },
  {
    label: 'Helpers',
    route: '/helpers',
    component: <ComponentPage title='Helpers' content={HelpersPage} />,
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
            <Paragraph>
              {headerRoutes.map((r, i) => (
                <React.Fragment key={r.label}>
                  <Link
                    as={NavLink}
                    to={r.route}
                    exact={r.exact}
                  >
                    {r.label}
                  </Link>
                  {i !== headerRoutes.length - 1 ? ' \u00b7 ' : ''}
                </React.Fragment>
              ))
              }
            </Paragraph>
            {routes
              .sort(
                (a, b) => (
                  a.label < b.label
                ) ? -1 : 1
              )
              .map((r, i) =>
                <React.Fragment key={r.label}>
                  <Link
                    as={NavLink}
                    to={r.route}
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
              {[...headerRoutes, ...routes].map((r) =>
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
