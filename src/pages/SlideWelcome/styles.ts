import styled from 'styled-components'
import { device } from 'ui'

export const SlideWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    right: 0;
    bottom: 0;
    top: 0;
    object-fit: cover;
    height: 100vh;
    width: 100%;
    position: absolute;
    object-position: left;
    z-index: -1;
  }
`

export const SlideInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  animation: 1s i ease-in-out;
  @keyframes i {
    0% {
      right: -500px;
    }
    50% {
      right: 100px;
    }
    100% {
      right: 0;
    }
  }
  @media ${device.mobileL} {
    justify-content: center;
  }
`
