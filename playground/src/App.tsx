import React from 'react'
import {
  CSSBaseline,
  Input,
  Link,
  Page,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Tr,
  Grid,
  GridItem,
} from './component-lib'

function App() {
  const [value, setValue] = React.useState<number | undefined>()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.currentTarget.value || '0')
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <>
      <CSSBaseline />
      <Page>
        <Link href={'https://chadlavi.github.io/clear/'} external>example link</Link>
        <Table>
          <TableHead>
            <Tr>
              <Th>Foo</Th>
              <Th>Bar</Th>
            </Tr>
          </TableHead>
          <TableBody>
            <Tr>
              <Td>gork</Td>
              <Td>blork</Td>
            </Tr>
            <Tr>
              <Td>foog</Td>
              <Td>frob</Td>
            </Tr>
            <Tr>
              <Td>gork</Td>
              <Td>blork</Td>
            </Tr>
            <Tr>
              <Td>foog</Td>
              <Td>frob</Td>
            </Tr>
          </TableBody>
        </Table>
        <Grid spacing={8}>
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
          <div style={{height: '20px', width: '100%', background: 'green'}}></div>
          </GridItem>

          <GridItem size={9}>
          <div style={{height: '20px', width: '100%', background: 'orange'}}></div>
          </GridItem>
        </Grid>
      </Page>
    </>
  )
}

export default App
