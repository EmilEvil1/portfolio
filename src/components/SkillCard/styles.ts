import styled from 'styled-components'
import { device } from 'ui'

export const Title = styled.div`
  margin: 1.25rem 0;
  font-size: 1.25rem;
  text-align: center;
  @media ${device.laptop} {
    text-align: center;
  }
  @media ${device.mobileL} {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
`

export const PointsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 30px;
  @media ${device.laptop} {
    margin: 0 50px;
  }
  @media ${device.mobileL} {
    margin: 0 20px;
  }
`

export const Item = styled.div`
  padding: 13px;
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  gap: 10px;
  @media ${device.laptop} {
    width: 100%;
  }
  @media ${device.tablet} {
    gap: 5px;
  }
  &:nth-child(odd) {
    padding: 13px 0;
  }
`

export const Point = styled.p`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1rem;
  text-align: left;
  transition: all 0.3s ease-in-out;
  @media ${device.tablet} {
    font-size: 0.8rem;
  }

  &:before {
    content: '\\2192';
    color: #f3ca2f;
    font-weight: bold;
    font-size: 25px;
    transition: transform 0.1s ease-in-out;
  }
  &:hover {
    color: #f3ca2f;
    &:before {
      content: '\\2192';
      color: #f3ca2f;
      font-weight: bold;
      font-size: 25px;
      transform: translate(-20px, -1px);
      transition: transform 0.1s ease-in-out;
    }
  }
`

export const IconWrapper = styled.div`
  text-align: center;
  @media ${device.mobileL} {
    & svg {
      width: 45px;
      height: 45px;
    }
  }
`
