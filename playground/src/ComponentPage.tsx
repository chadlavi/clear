import * as React from 'react'

export const setTitle = (title?: string): void => {
  document.title = `Clear${title? ` | ${title}` : ''}`
}

export const ComponentPage: React.FC<{
  content: React.FC<{}>
  title?: string
}> = ({content, title}) => {
  setTitle(title)
  const Content = content
  return <Content/>
}
