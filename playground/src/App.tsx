import React from 'react'
import {
  GlobalStyles,
  Input,
  Link,
  Page,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Grid,
  GridItem,
} from './component-lib'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from 'react-router-dom'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}`}>
        <Link as={RouterLink} to={`${process.env.PUBLIC_URL}/bar`}>bar</Link> &nbsp;
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/bar`}>
      <Link as={RouterLink} to={`${process.env.PUBLIC_URL}/baz`}>baz</Link> &nbsp;
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/baz`}>
      <Link as={RouterLink} to={`${process.env.PUBLIC_URL}`}>home</Link> &nbsp;
      </Route>
    </Switch>
  </Router>
)

const App = () => {
  const [value, setValue] = React.useState<number | undefined>()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.currentTarget.value || '0')
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <>
      <GlobalStyles />
      <Page>
        <Routes />
        <Link href={'https://github.com/chadlavi/clear/'}>example external link</Link>  <Link href={'/clear/'}>example internal link</Link>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell as={'th'}>Foo</TableCell>
              <TableCell as={'th'}>Bar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>gork</TableCell>
              <TableCell>blork</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>foog</TableCell>
              <TableCell>frob</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>gork</TableCell>
              <TableCell>blork</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>foog</TableCell>
              <TableCell>frob</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Grid spacing={8}>
          <GridItem size={6}>
            <Input
              error={value === undefined}
              required
              value={value}
              onChange={handleChange}
              type={'number'}
              inputMode={'decimal'}
              pattern={'[0-9]*'}
              label={'foobar'}
            />
          </GridItem>
          <GridItem size={6}>
            <Input
              value={value}
              onChange={handleChange}
              type={'number'}
              inputMode={'decimal'}
              pattern={'[0-9]*'}
              label={'foobar'}
            />
          </GridItem>

          <GridItem size={3}>
          <div style={{width: '100%', background: 'green', padding: 8,}}> 3-column GridItem</div>
          </GridItem>

          <GridItem size={9}>
          <div style={{width: '100%', background: 'orange',  padding: 8,}}>9-column GridItem</div>
          </GridItem>
        </Grid>
      </Page>
    </>
  )
}

export default App
