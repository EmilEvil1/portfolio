import styled from 'styled-components'
import { device } from 'ui'

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 30px;
  @media ${device.laptop} {
    gap: 20px;
  }
`
