import styled from 'styled-components'
import { device } from 'ui'

export const ListWrapper = styled.div`
  height: calc(100vh - 30%);
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`

export const NavigationBtn = styled.div`
  position: absolute;
  top: 10%;
  width: 30px;
  z-index: 10;
  height: 30px;
  border: solid rgb(243, 202, 47);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  @media ${device.mobileL} {
    width: 20px;
    height: 20px;
  }
  &.swiper-button-disabled {
    border-color: white;
  }
  &.prevBTN {
    left: 20px;
    transform: rotate(135deg);
  }
  &.nextBTN {
    right: 20px;
    transform: rotate(-45deg);
  }
`
