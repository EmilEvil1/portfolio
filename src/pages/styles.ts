import styled from 'styled-components'
import { device } from 'ui'

export const SlideWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 110px;
  @media ${device.tablet} {
    padding-top: 90px;
  }
`

export const SlideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`

export const NdaBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 20px;
  & img {
    border-radius: 20px;
    object-fit: cover;
    object-position: top left;
  }
`

export const ParentBox = styled.div`
  position: relative;
  &:hover ${NdaBackground} {
    opacity: 0.3;
  }
`

export const SlideElement = styled.div`
  position: relative;
  padding: 1rem;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid white;
  &:hover ${NdaBackground} {
    opacity: 0.3;
  }
`

export const ContentWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media ${device.tablet} {
    flex-direction: column;
  }
`

export const ContentInner = styled.div`
  height: 100%;
`

export const SlideElementWrapper = styled.a`
  display: flex;
  flex-direction: column;
  color: white;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
    width: 100%;
  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
  }
`

export const SlidersArrowContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export const SlidersArrow = styled.div`
  width: 20px;
  z-index: 10;
  height: 20px;
  border-style: solid;
  border-color: rgb(243, 202, 47);
  border-image: initial;
  border-width: 0px 3px 3px 0px;
  display: inline-block;
  cursor: pointer;
  &.prevButton {
    transform: rotate(135deg);
  }
  &.nextButton {
    transform: rotate(-45deg);
  }
  &.swiper-button-disabled {
    border-color: white;
  }
`

export const RotateContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 99999999;
  background: #272727;
  pointer-events: none;
`
export const CountWrapper = styled.div`
  position: absolute;
  top: 50%;
  width: 160px;
  margin: 0;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  @media ${device.mobileL} {
    width: 140px;
  }
`
