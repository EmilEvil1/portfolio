import styled from 'styled-components'
import { device } from 'ui'

export const CookiesWrapper = styled.div`
  position: fixed;
  left: 0;
  padding: 1rem;
  width: auto;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: flex-end;
  z-index: 98;
  border: 1px solid white;
  border-radius: 20px;
  background: rgb(61, 61, 61);
  transition: opacity 0.5s ease-in-out;
  animation: 0.5s openSlide ease-in-out;
  @media ${device.tablet} {
    margin: 0 1rem;
    flex-direction: column;
    gap: 30px;
    p {
      text-align: center;
      font-size: 1rem;
    }
  }
  @media ${device.mobileL} {
    gap: 20px;
    p {
      text-align: center;
      font-size: 0.9rem;
    }
  }

  &.isAccepted {
    opacity: 1;
    animation: 0.5s openSlide ease-in-out;
    transition: opacity 1s ease-in-out;
    bottom: 1rem;
  }
  &.isHidden {
    opacity: 0;
    transition: opacity 1s ease-in-out;
    animation: 0.5s closeSlide ease-in-out;
    bottom: -100px;
  }

  @keyframes closeSlide {
    0% {
      bottom: 1rem;
    }
    50% {
      bottom: 70px;
    }
    900% {
      bottom: -100px;
    }
    100% {
      visibility: hidden;
    }
  }

  @keyframes openSlide {
    0% {
      bottom: -250px;
    }
    50% {
      bottom: 70px;
    }
    90% {
      bottom: 1rem;
    }
    100% {
      visibility: hidden;
    }
  }
`
