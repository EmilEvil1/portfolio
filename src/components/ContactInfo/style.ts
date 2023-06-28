import styled from 'styled-components'
import { device } from 'ui'

export const ContactInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media ${device.tabletL} {
    display: none;
  }
`
