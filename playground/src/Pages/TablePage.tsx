import * as React from 'react'
import {HashLink} from 'react-router-hash-link'
import {setTitle} from '../utils'
import {
  Code,
  CodeBlock,
  GenerateTable,
  Header,
  Link,
  Paragraph,
  ScrollContainer,
  Table,
  TableBody,
  TableCell,
  TableData,
  TableHead,
  TableHeaderType,
  TableRow,
} from '../component-lib'

type TableHeaders = 'name' | 'email' | 'occupation'

const tableHeaders: TableHeaderType<TableHeaders>[] = [
  'name',
  'email',
  'occupation',
]

const tableData: TableData<TableHeaders> = [
  {
    name: 'Phillip J Fry',
    email: 'cosmicphil@panuccispizza.net',
    occupation: 'Delivery boy',
  },
  {
    name: 'Turanga Leela',
    email: '1bdi@planetexpress.biz',
    occupation: 'Captain',
  },
  {
    name: 'Hubert J Farnsworth',
    email: 'hubie@planetexpress.biz',
    occupation: 'Professor',
  },
  {
    name: 'Bender "Bending" Rodriguez',
    email: 'bender@benderisgreat.com',
    occupation: 'Bending unit',
  }
]

export const TablePage: React.FC = () =>
  <>
    {setTitle('Table')}
    <Header>Table</Header>
    <Paragraph as={'nav'}>
      <Link as={HashLink} to={'#props'}>Props</Link>{' \u00b7 '}
      <Link as={HashLink} to={'#table'}><Code>{'<Table>'}</Code></Link>{' \u00b7 '}
      <Link as={HashLink} to={'#tablehead'}><Code>{'<TableHead>'}</Code></Link>{' \u00b7 '}
      <Link as={HashLink} to={'#tablebody'}><Code>{'<TableBody>'}</Code></Link>{' \u00b7 '}
      <Link as={HashLink} to={'#tablerow'}><Code>{'<TableRow>'}</Code></Link>{' \u00b7 '}
      <Link as={HashLink} to={'#tablecell'}><Code>{'<TableCell>'}</Code></Link>{' \u00b7 '}
      <Link as={HashLink} to={'#generatetable'}><Code>{'<GenerateTable>'}</Code></Link>{' \u00b7 '}
      <Link as={HashLink} to={'#customization'}>Customization</Link>{' \u00b7 '}
      <Link as={HashLink} to={'#examples'}>Examples</Link>
    </Paragraph>
    <Paragraph>
      Clear provides styled versions of the table primitives <Code>{'<table>'}</Code>, <Code>{'<thead>'}</Code>,
      <Code>{'<tbody>'}</Code>, <Code>{'<tr>'}</Code>, and <Code>{'<td>'}</Code> (which can be extended to
      cover <Code>{'<th>'}</Code>).
    </Paragraph>
    <Header as='h2' id='props'>Props</Header>
    <Paragraph>
      All of Clear's table-related components accept the standard props that could normally be passed to their HTML
      equivalents.
    </Paragraph>
    <Header as='h2' id='table'><Code>{'<Table>'}</Code></Header>
    <Paragraph>
      Use the <Code>Table</Code> component where you would use an HTML <Code>{'<table>'}</Code>.
    </Paragraph>
    <Header as='h2' id='tablehead'><Code>{'<TableHead>'}</Code></Header>
    <Paragraph>
      Use the <Code>TableHead</Code> component where you would use an HTML <Code>{'<thead>'}</Code>.
    </Paragraph>
    <Header as='h2' id='tablebody'><Code>{'<TableBody>'}</Code></Header>
    <Paragraph>
      Use the <Code>TableBody</Code> component where you would use an HTML <Code>{'<tbody>'}</Code>.
    </Paragraph>
    <Header as='h2' id='tablerow'><Code>{'<TableRow>'}</Code></Header>
    <Paragraph>
      Use the <Code>TableRow</Code> component where you would use an HTML <Code>{'<tr>'}</Code>.
    </Paragraph>
    <Header as='h2' id='tablecell'><Code>{'<TableCell>'}</Code></Header>
    <Paragraph>
      Use the <Code>TableCell</Code> component where you would use an HTML <Code>{'<td>'}</Code>.
    </Paragraph>
    <Paragraph>
      <Code>TableCell</Code> can also be used for <Code>{'<th>'}</Code> (table header cell) by extending it with
      the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop</Link> like
      so:
    </Paragraph>
    <CodeBlock>{`<TableCell as='th'>
  This will render in the DOM as a th
</TableCell>`}
    </CodeBlock>
    <Header as='h2' id='generatetable'><Code>{'<GenerateTable>'}</Code></Header>
    <Paragraph>
      You can also generate a table from an array of headers and an array of row data with
      the <Code>GenerateTable</Code> component. Using this component is much terser in terms of JSX, but requires more
      thoroughly typed data.
    </Paragraph>
    <Header as='h2' id='customization'>Customization</Header>
    <Paragraph>
      See <Link as={HashLink} to={'/start#customization'}>Customization</Link> discussion on the Getting started page.
    </Paragraph>
    <Header as='h2' id='examples'>
      <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/TablePage.tsx#L128'}>Example</Link>
    </Header>
    <Paragraph>
      Both <Code>Table</Code>s below are wrapped
      in <Link as={HashLink} to={'/layout#scrollcontainer'}><Code>{'<ScrollContainer>'}</Code></Link>s and has a
      min-width of 600px. In narrow viewports, they will be horizontally scrollable.
    </Paragraph>
    <Paragraph>
      Normally constructed table:
    </Paragraph>
    <ScrollContainer direction='horizontal' maxWidth={'100%'} contentMinWidth={600}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell as={'th'}>Name</TableCell>
            <TableCell as={'th'}>Email</TableCell>
            <TableCell as={'th'}>Occupation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Phillip J Fry</TableCell>
            <TableCell>cosmicphil@panuccispizza.net</TableCell>
            <TableCell>Delivery boy</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Turanga Leela</TableCell>
            <TableCell>1bdi@planetexpress.biz</TableCell>
            <TableCell>Captain</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hubert J Farnsworth</TableCell>
            <TableCell>hubie@planetexpress.biz</TableCell>
            <TableCell>Professor</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bender "Bending" Rodriguez</TableCell>
            <TableCell>bender@benderisgreat.com</TableCell>
            <TableCell>Bending unit</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ScrollContainer>
    <Paragraph>
      Here's the same table, generated with the <Code>GenerateTable</Code> component:
    </Paragraph>
    <ScrollContainer direction='horizontal' maxWidth={'100%'} contentMinWidth={600}>
      <GenerateTable data={tableData} headers={tableHeaders} />
    </ScrollContainer>
  </>
