import styled from 'styled-components'
import { device } from 'ui'

export const CardWrapper = styled.div`
  padding: 30px;
  width: 545px;
  background-color: #3d3d3d;
  border-radius: 20px;
  border: 2px solid white;
  @media ${device.tablet} {
    width: auto;
  }
  div {
    font-size: 2rem;
    text-align: start;
    line-height: 4rem;
    @media ${device.tablet} {
      font-size: 1.3rem;
    }
    @media ${device.mobileL} {
      font-size: 0.9rem;
      line-height: 40px;
    }
    span {
      color: #f3ca2f;
    }
  }
`
