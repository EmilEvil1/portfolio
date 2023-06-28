import React, { FC } from 'react'
import { Container, WelcomeCard } from 'components'
import { BackgroundImage, ScrollButton } from 'ui'
import { SlideInner, SlideWrapper } from './styles'
export const SlideWelcome: FC = () => {
  return (
    <SlideWrapper>
      <BackgroundImage src='/img/homeBackground.jpg' alt='Home background' />
      <Container>
        <SlideInner>
          <WelcomeCard />
        </SlideInner>
        <ScrollButton />
      </Container>
    </SlideWrapper>
  )
}
