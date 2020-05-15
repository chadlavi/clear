import * as React from 'react'
import {AccessibleHashlink} from '../AccessibleHashlink'
import {
  Code,
  CodeBlock,
  Header,
  Link,
  List,
  ListItem,
  Paragraph,
} from '../component-lib'

export const ListPage: React.FC = () => (
  <>
    <Header>List</Header>
    <Paragraph as={'nav'}>
      <AccessibleHashlink to={'#list'}>{'<List>'}</AccessibleHashlink>{' \u00b7 '}
      <AccessibleHashlink to={'#listitem'}>{'<ListItem>'}</AccessibleHashlink>{' \u00b7 '}
      <AccessibleHashlink to={'#customization'}>Customization</AccessibleHashlink>{' \u00b7 '}
      <AccessibleHashlink to={'#examples'}>Examples</AccessibleHashlink>
    </Paragraph>
    <Header as='h2' id='list'><Code>{'<List>'}</Code></Header>
    <Paragraph>
      <Code>{'<List>'}</Code> is a styled wrapper around an HTML <Code>{'<ul>'}</Code>.
    </Paragraph>
    <Header as='h3' id='listprops'>Props: <Code>{'ListProps'}</Code></Header>
    <Paragraph>
      <Code>{'<List>'}</Code> accepts all the props that can
      be passed to a <Code>{'<ul>'}</Code>.
    </Paragraph>
    <Paragraph>
      Use the <Link href={'https://styled-components.com/docs/api#as-polymorphic-prop'}><Code>as</Code> prop</Link> to
      render an <Code>{'<ol>'}</Code> and accept <Code>{'React.HTMLAttributes<HTMLOListElement>'}</Code> props:
    </Paragraph>
    <CodeBlock>{`<Paragraph>
  The following list
</Paragraph>
<List as='ol' type='i'>
  <ListItem>Is numbered</ListItem>
  <ListItem>
    Accepts props like <Code>type</Code> that <Code>{'<ol>'}</Code> can
    accept but <Code>{'<ul>'}</Code> cannot
  </ListItem>
  <ListItem>Is styled</ListItem>
  <ListItem>Is awesome</ListItem>
</List>`}</CodeBlock>
    <Paragraph>
  The following list
    </Paragraph>
    <List as='ol' type='i'>
      <ListItem>Is numbered</ListItem>
      <ListItem>
        Accepts props like <Code>type</Code> that <Code>{'<ol>'}</Code> can
        accept but <Code>{'<ul>'}</Code> cannot
      </ListItem>
      <ListItem>Is styled</ListItem>
      <ListItem>Is awesome</ListItem>
    </List>
    <Header as='h2' id='listitem'><Code>{'<ListItem>'}</Code></Header>
    <Paragraph>
      <Code>{'<ListItem>'}</Code> is a styled wrapper around an HTML <Code>{'<li>'}</Code>.
    </Paragraph>
    <Header as='h3' id='listitemprops'>Props: <Code>{'ListItemProps'}</Code></Header>
    <Paragraph>
      <Code>{'<ListItem>'}</Code> accepts all the props that can be passed to an <Code>{'<li>'}</Code>.
    </Paragraph>
    <Header as='h2' id='customization'>Customization</Header>
    <Paragraph>
    See <AccessibleHashlink to={'/start#customization'}>Customization</AccessibleHashlink> discussion on the
    Getting started page.
    </Paragraph>
    <Header as='h2' id='examples'>Examples</Header>
    <Paragraph>
      Default:
    </Paragraph>
    <List>
      <ListItem><em>The Boatjacking of Supership '79</em></ListItem>
      <ListItem><em>Calling All Quakers (with Dolores Montenegro)</em></ListItem>
      <ListItem><em>The Contrabulous Fabtraption of Professor Horatio Hufnagel</em></ListItem>
      <ListItem><em>Cry Yuma</em></ListItem>
      <ListItem><em>David versus Super Goliath</em></ListItem>
      <ListItem><em>Dial M for Murderousness</em></ListItem>
      <ListItem><em>The Electric Gigolo</em></ListItem>
      <ListItem><em>The Erotic Adventures of Hercules</em></ListItem>
      <ListItem><em>Give My Remains to Broadway</em></ListItem>
      <ListItem><em>Gladys the Groovy Mule</em></ListItem>
      <ListItem><em>Good-Time Slim, Uncle Doobie, and the Great 'Frisco Freak-Out'</em></ListItem>
    </List>
    <Paragraph>
      With <Code>{'as=\'ol\''}</Code>:
    </Paragraph>
    <List as='ol'>
      <ListItem><em>The Greatest Story Ever Hulaed</em></ListItem>
      <ListItem><em>Here Comes the Coast Guard</em></ListItem>
      <ListItem><em>Alice Doesn't Live Anymore</em></ListItem>
      <ListItem><em>Hydro, the Man With the Hydraulic Arms</em></ListItem>
      <ListItem><em>Jagged Attraction</em></ListItem>
      <ListItem><em>Leper in the Backfield</em></ListItem>
      <ListItem><em>Look Who's Still Oinking</em></ListItem>
      <ListItem><em>Make-Out King of Montana</em></ListItem>
      <ListItem><em>Meet Joe Blow</em></ListItem>
      <ListItem><em>The Muppets Go Medieval</em></ListItem>
      <ListItem><em>"P" is for Psycho</em></ListItem>
      <ListItem><em>The President's Neck is Missing</em></ListItem>
    </List>
    <Paragraph>
      With props that can only be passed to <Code>{'<ol>'}</Code>:
    </Paragraph>
    <List as='ol' type='I'>
      <ListItem><em>Radioactive Man</em></ListItem>
      <ListItem><em>Radioactive Man II: Bring On The Sequel</em></ListItem>
      <ListItem><em>Radioactive Man III: Oh God, Not Again</em></ListItem>
      <ListItem><em>The Revenge of Abe Lincoln</em></ListItem>
      <ListItem><em>The Seven-Year Old Bitch</em></ListItem>
      <ListItem><em>Sorry, Wrong Closet</em></ListItem>
      <ListItem><em>Suddenly Last Supper</em></ListItem>
      <ListItem><em>They Came to Burgle Carnegie Hall</em></ListItem>
      <ListItem><em>Today We Kill, Tomorrow We Die</em></ListItem>
      <ListItem><em>The Verdict Was Mail Fraud</em></ListItem>
      <ListItem><em>The Wackiest Covered Wagon in the West</em></ListItem>
    </List>
  </>
)
