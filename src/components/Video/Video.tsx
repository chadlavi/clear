import * as React from 'react'
import {Paragraph} from '../Paragraph'

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  /**
   * The text or element to show instead of the video if the video is not supported
   */
  backupMessage?: React.ReactNode
  /**
   * Treat the video like a gif
   */
  giflike?: boolean
  /**
   * Either a simple url string for the video source, or an object representing the props that can be passed to
   * a `<source />`, or an array of those objects
   */
  source: React.SourceHTMLAttributes<HTMLSourceElement> | React.SourceHTMLAttributes<HTMLSourceElement>[] | string
}

const buildSources = (source: VideoProps['source']): JSX.Element => {
  if (typeof source === 'string') {
    return (
      <source src={source} />
    )
  } else if (Array.isArray(source)) {
    return <>
      {source.map((s) => (
        <source key={s.src} {...s} />
      ))}
    </>
  } else {
    return (
      <source {...source} />
    )
  }
}

/**
 * A wrapper around html `<video>` that accepts all the props that can be passed to the base `<video>` element,
 * plus a few specialized props:
 *
 * * `backupMessage`: define the backup to show if the video is not supported
 * * `giflike`: if true, treat the video like a gif
 * (default the following props to `true`: `autoplay`, `loop`, `mute`, `playInline`)
 * * `source`: Either a simple url string for the video source, or an object representing
 * the props that can be passed to
 * a `<source />`, or an array of those objects
 */
export const Video: React.FC<VideoProps> = (props) => {

  const {
    backupMessage,
    giflike,
    source,
    ...videoProps
  } = props

  const giflikeProps: Partial<VideoProps> = giflike ? {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
  } : {}

  return (
    <video
      {...giflikeProps}
      {...videoProps}
    >
      {buildSources(source)}
      {backupMessage ?? <Paragraph>Your browser doesn't support this embedded video.</Paragraph>}
    </video>
  )
}
