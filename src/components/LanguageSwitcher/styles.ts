import styled from 'styled-components'
import { device } from 'ui'

export const Switcher = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  &.isMobile {
    padding: 0 10px;
    flex-direction: row;
    @media ${device.mobileLD} {
      display: none;
    }
  }

  @media ${device.mobileL} {
    display: none;
  }
    
}
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
