import React, { FC } from 'react'
import { SlideWrapper } from 'pages/styles'
import { PageTitle } from 'ui'
import { Container, Video } from 'components'
import { SliderList, useGetLanguage } from 'modules'

export const SlideAbout: FC = () => {
  const { data } = useGetLanguage()
  return (
    <>
      <Container>
        <SlideWrapper>
          <PageTitle name={data?.second?.title} />
          <SliderList />
        </SlideWrapper>
      </Container>
      <Video />
    </>
  )
}
