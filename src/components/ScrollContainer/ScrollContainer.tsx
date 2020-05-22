import * as React from 'react'
import styled from 'styled-components'

export interface ScrollContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  contentMinHeight?: number | string
  contentMinWidth?: number | string
  direction: 'horizontal' | 'vertical'
  maxHeight?: number | string
  maxWidth?: number | string
}

const ContainerBase: React.FC<ScrollContainerProps> = ({
  contentMinHeight: _contentMinHeight, contentMinWidth: _contentMinWidth,
  direction: _direction, maxHeight: _maxHeight, maxWidth: _maxWidth,
  ...props
}) => <div {...props} />


const Container = styled(ContainerBase)`
  width: 100%;
  ${(p): string => {
    const {direction} = p
    if (direction === 'horizontal') {
      return 'overflow-x: auto; max-width: 100%;'
    } else {
      return 'overflow-y: auto; max-height: 100%;'
    }
  }}
  ${(p): string => {
    const {maxHeight} = p
    if (typeof maxHeight === 'number') {
      return `max-height: ${maxHeight}px;`
    } else if (maxHeight) {
      return `max-height: ${maxHeight};`
    } else {
      return ''
    }
  }}

  ${(p): string => {
    const {maxWidth} = p
    if (typeof maxWidth === 'number') {
      return `max-width: ${maxWidth}px;`
    } else if (maxWidth) {
      return `max-width: ${maxWidth};`
    } else {
      return ''
    }
  }}
`

const ContentBase: React.FC<ScrollContainerProps> = ({
  contentMinHeight: _contentMinHeight, contentMinWidth: _contentMinWidth,
  direction: _direction, maxHeight: _maxHeight, maxWidth: _maxWidth, ...props
}) => <div {...props} />


const Content = styled(ContentBase)`
  ${(p): string => {
    const {contentMinHeight} = p
    if (typeof contentMinHeight === 'number') {
      return `min-height: ${contentMinHeight}px;`
    } else if (contentMinHeight) {
      return `min-height: ${contentMinHeight};`
    } else {
      return ''
    }
  }}
  ${(p): string => {
    const {contentMinWidth} = p
    if (typeof contentMinWidth === 'number') {
      return `min-width: ${contentMinWidth}px;`
    } else if (contentMinWidth) {
      return `min-width: ${contentMinWidth};`
    } else {
      return ''
    }
  }}
`
/**
 * You can use a ScrollContainer to create a verticall or horizontally scrollable div with content of a fixed minimum
 * height/width. Scroll containers are very convenient ways to prevent <Table>s from becoming unmanageable on
 * responsive devices.
 *
 * https://chadlavi.github.io/clear/#/layout#scrollcontainer
 */
export const ScrollContainer: React.FC<ScrollContainerProps> = (props) => (
  <Container
    direction={props.direction}
    maxHeight={props.maxHeight}
    maxWidth={props.maxWidth}
  >
    <Content
      contentMinHeight={props.contentMinHeight}
      contentMinWidth={props.contentMinWidth}
      {...props}
    />
  </Container>
)
