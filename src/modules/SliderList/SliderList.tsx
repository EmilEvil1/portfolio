import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { ListWrapper, NavigationBtn } from './styles'
import { Icon } from 'ui'
import { SkillCard } from 'components'
import { useMobileDisplaySize } from 'hooks'
import { useGetLanguage } from 'modules'
import { IList } from './types'

export const SliderList = () => {
  const { width } = useMobileDisplaySize()
  const { data } = useGetLanguage()
  return (
    <ListWrapper>
      {width > 1024 ? (
        <>
          {data?.second?.cards?.map((element: IList, index: number) => {
            return (
              <SkillCard
                key={index}
                icon={<Icon name={element.icon} />}
                title={element.title}
                points={element.points}
              />
            )
          })}
        </>
      ) : (
        <Swiper
          className='skillPoints'
          direction='horizontal'
          slidesPerView={1}
          modules={[Navigation]}
          speed={800}
          slideToClickedSlide
          navigation={{
            nextEl: '.nextBTN',
            prevEl: '.prevBTN',
          }}
          allowTouchMove
        >
          {data?.second?.cards?.map((element: IList, index: number) => {
            return (
              <SwiperSlide key={index}>
                <SkillCard
                  key={index}
                  icon={<Icon name={element.icon} />}
                  title={element.title}
                  points={element.points}
                />
              </SwiperSlide>
            )
          })}
          <NavigationBtn className='nextBTN' />
          <NavigationBtn className='prevBTN' />
        </Swiper>
      )}
    </ListWrapper>
  )
}
