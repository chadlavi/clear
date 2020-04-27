import * as React from 'react'
import {
  BrowserRouter as Router,
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

const makePath = (path?: string) => `${process.env.PUBLIC_URL}/${path || ''}`

export const Routes = () => (
  <>
  <CSSVariables />
  <GlobalStyles />
  <Page>
    <Router>
      <Grid spacing={16}>
        <GridItem>
          <Link as={RouterLink} to={makePath()}>Clear</Link> &middot;&nbsp;
          <Link as={RouterLink} to={makePath('global-styles')}>Global styles</Link> &middot;&nbsp;
          <Link as={RouterLink} to={makePath('layout')}>Layout</Link> &middot;&nbsp;
          <Link as={RouterLink} to={makePath('input')}>Input</Link> &middot;&nbsp;
          <Link as={RouterLink} to={makePath('button')}>Button</Link> &middot;&nbsp;
          <Link as={RouterLink} to={makePath('link')}>Link</Link> &middot;&nbsp;
          <Link as={RouterLink} to={makePath('text')}>Text formatting</Link> &middot;&nbsp;
          <Link as={RouterLink} to={makePath('table')}>Table</Link>
        </GridItem>
        <GridItem>
          <Switch>
            <Route exact path={makePath()}>
              <HomePage />
            </Route>
            <Route exact path={makePath('global-styles')}>
              <GlobalStylesPage />
            </Route><Route exact path={makePath('layout')}>
              <LayoutPage />
            </Route>
            <Route path={makePath('input')}>
              <InputPage />
            </Route>
            <Route path={makePath('button')}>
              <ButtonPage />
            </Route>
            <Route path={makePath('link')}>
              <LinkPage />
            </Route>
            <Route path={makePath('text')}>
              <TextPage />
            </Route>
            <Route path={makePath('table')}>
              <TablePage />
            </Route>
          </Switch>
        </GridItem>
      </Grid>
    </Router>
  </Page>
  </>
)
