import React, { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useMobileDisplaySize } from 'hooks'
import {
  NdaBackground,
  ParentBox,
  SlideContainer,
  SlideElement,
  SlideElementWrapper,
  SlidersArrowContainer,
  SlideWrapper,
  SlidersArrow,
  ArrowsContainer,
} from '../styles'
import { BackgroundImage, Button, PageTitle, SortButton } from 'ui'
import { Container, ProjectCard } from 'components'
import { useGetLanguage } from 'modules'
import { IProjectLocalState } from './types'

export const SlideProjects: FC = () => {
  const { width } = useMobileDisplaySize()
  const [open, setOpen] = useState<boolean>(false)
  const { data } = useGetLanguage()
  const [stateProjectData, setStateProjectData] = useState<IProjectLocalState[]>([])
  const [sortLine, setSortLine] = useState<boolean>(true)

  useEffect(() => {
    !!data?.third.projects.length &&
      setStateProjectData(data?.third.projects.sort((a, b) => Number(b.year) - Number(a.year)))
  }, [data])

  const countSliderPerView = (width: number) => {
    switch (true) {
      case width <= 530:
        return 1.5
      case width > 530 && width < 700:
        return 2
      case width > 700 && width < 900:
        return 2.5
      case width > 900 && width < 1280:
        return 3
      default:
        return 4
    }
  }

  const sortingArray = (sortLine: boolean) => {
    if (data) {
      const sorted = stateProjectData?.sort((a, b) => Number(a.year) - Number(b.year))
      setSortLine(!sortLine)
      sortLine ? setStateProjectData(sorted) : setStateProjectData(sorted?.reverse())
    }
  }

  return (
    <SlideWrapper>
      {!!stateProjectData && (
        <Container>
          <div>
            <PageTitle name={data?.third?.title} />
            <SlidersArrowContainer>
              <SortButton
                sortedStatus={sortLine}
                action={sortingArray}
                down={data?.third.sortDown || ''}
                up={data?.third.sortUp || ''}
              />
              <ArrowsContainer>
                <SlidersArrow className='nextButton' />
                <SlidersArrow className='prevButton' />
              </ArrowsContainer>
            </SlidersArrowContainer>
            <SlideContainer>
              <Swiper
                className='ProjectSlider'
                direction='horizontal'
                slidesPerView={countSliderPerView(width)}
                modules={[Navigation]}
                spaceBetween={30}
                speed={1000}
                allowTouchMove
                navigation={{
                  nextEl: '.nextButton',
                  prevEl: '.prevButton',
                }}
              >
                {stateProjectData?.map((element: IProjectLocalState, index: number) => {
                  return (
                    <SwiperSlide key={index}>
                      <ParentBox>
                        <SlideElement key={index}>
                          <SlideElementWrapper target='_blank' href={element.link}>
                            <ProjectCard
                              title={element.title}
                              yearTitle={data?.third?.yearTitle}
                              year={element.year}
                              roleTitle={data?.third?.roleTitle}
                              role={element.role}
                              technology={element.technology}
                              stackTitle={data?.third?.stackTitle}
                            />
                          </SlideElementWrapper>
                          <div style={{ marginTop: 20 }}>
                            <Button text={data?.third.button} onClick={() => setOpen(!open)} />
                          </div>
                        </SlideElement>
                        <NdaBackground>
                          <BackgroundImage src={element.img} alt={element.title} />
                        </NdaBackground>
                      </ParentBox>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </SlideContainer>
          </div>
        </Container>
      )}
    </SlideWrapper>
  )
}
