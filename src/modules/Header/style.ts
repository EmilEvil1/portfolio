import styled from 'styled-components'
import { device } from 'ui'

export const HeaderWrapper = styled.div`
  margin: 0;
  position: fixed;
  width: 100%;
  height: 100px;
  padding: 0;
  z-index: 2;
`

export const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  & svg {
    cursor: pointer;
  }
`

export const Switcher = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ButtonStyle = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  &.isActive {
    color: rgb(243, 202, 47);
  }
  @media ${device.mobileL} {
    display: none;
  }
`
