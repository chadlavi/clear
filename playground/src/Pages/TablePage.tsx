import * as React from 'react'
import {
  Code,
  Header,
  Paragraph,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
  CodeBlock,
} from '../component-lib'
export const TablePage = () => (
  <>
    <Header>Table</Header>
    <Paragraph>
      Clear provides styled versions of the table primitives <Code>{`<table>`}</Code>, <Code>{`<thead>`}</Code>,
      <Code>{`<tbody>`}</Code>, <Code>{`<tr>`}</Code>, and <Code>{`<td>`}</Code> (which can be extended to
      cover <Code>{`<th>`}</Code>).
    </Paragraph>
    <Header as='h2' id='table'><Code>{`<Table>`}</Code></Header>
    <Paragraph>
      Use the <Code>Table</Code> component where you would use an HTML <Code>{`<table>`}</Code>.
    </Paragraph>
    <Header as='h2' id='tablehead'><Code>{`<TableHead>`}</Code></Header>
    <Paragraph>
      Use the <Code>TableHead</Code> component where you would use an HTML <Code>{`<thead>`}</Code>.
    </Paragraph>
    <Header as='h2' id='tablebody'><Code>{`<TableBody>`}</Code></Header>
    <Paragraph>
      Use the <Code>TableBody</Code> component where you would use an HTML <Code>{`<tbody>`}</Code>.
    </Paragraph>
    <Header as='h2' id='tablerow'><Code>{`<TableRow>`}</Code></Header>
    <Paragraph>
      Use the <Code>TableRow</Code> component where you would use an HTML <Code>{`<tr>`}</Code>.
    </Paragraph>
    <Header as='h2' id='tablecell'><Code>{`<TableCell>`}</Code></Header>
    <Paragraph>
      Use the <Code>TableCell</Code> component where you would use an HTML <Code>{`<td>`}</Code>.
    </Paragraph>
    <Paragraph>
      <Code>TableCell</Code> can also be used for <Code>{`<th>`}</Code> (table header cell) by extending it with
      the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop</Link> like
      so:
    </Paragraph>
    <CodeBlock>{`<TableCell as='th'>
  This will render in the DOM as a th
</TableCell>`}
    </CodeBlock>
    <Paragraph>
      
    </Paragraph>
    <Header as='h2' id='examples'>
      <Link href={'https://github.com/chadlavi/clear/blob/master/playground/src/Pages/TablePage.tsx#L57'}>Example</Link>
    </Header>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell as={'th'}>Name</TableCell>
          <TableCell as={'th'}>email</TableCell>
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
  </>
)