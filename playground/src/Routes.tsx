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

export const Routes = () => (
  <>
  <CSSVariables />
  <GlobalStyles />
  <Page>
    <Router basename='/'>
      <Grid spacing={16}>
        <GridItem>
          <Link as={RouterLink} to={'/'}>Clear ({version})</Link> &middot;&nbsp;
          <Link as={RouterLink} to={'/global-styles'}>Global styles</Link> &middot;&nbsp;
          <Link as={RouterLink} to={'/layout'}>Layout</Link> &middot;&nbsp;
          <Link as={RouterLink} to={'/input'}>Input</Link> &middot;&nbsp;
          <Link as={RouterLink} to={'/button'}>Button</Link> &middot;&nbsp;
          <Link as={RouterLink} to={'/link'}>Link</Link> &middot;&nbsp;
          <Link as={RouterLink} to={'/text'}>Text formatting</Link> &middot;&nbsp;
          <Link as={RouterLink} to={'/table'}>Table</Link>
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
