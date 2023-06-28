import React, { FC } from 'react'
import { VideoContainer } from './styles'
import video from 'assets/video/mov.mp4'

export const Video: FC = () => {
  return (
    <VideoContainer autoPlay muted loop playsInline>
      <source src={video} type='video/mp4' />
    </VideoContainer>
  )
}
