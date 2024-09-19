import React, { FC, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation, Pagination } from 'swiper'
import 'css/swiper.css'
import { ContentInner } from '../styles'
import { AcceptCookies } from 'components'
import { Header } from 'modules'
import { SlideWelcome, SlideAbout, SlideProjects, SlideContacts, Loading } from 'pages'
import { useErrorContext } from 'context'

export const Home: FC = () => {
  const navigate = useNavigate()
  const [error, setError] = useErrorContext()

  useEffect(() => setError(undefined), [])

  if (error) navigate('/error')

  const slidesElements = [
    <SlideWelcome key={1} />,
    <SlideAbout key={2} />,
    <SlideProjects key={3} />,
    <SlideContacts key={4} />,
  ]

  return (
    <div>
      <Loading>
      <Header />
      </Loading>
      <Swiper
        className='mySwiper'
        direction='vertical'
        slidesPerView={1}
        spaceBetween={0}
        mousewheel
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination, Navigation]}
        speed={800}
        allowTouchMove
        navigation={{ nextEl: '.scrollBtn' }}
      >
        {slidesElements.map((e: ReactNode, index: number) => {
          return (
            <SwiperSlide key={index}>
              <ContentInner key={index}>{e}</ContentInner>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <AcceptCookies />
    </div>
  )
}
