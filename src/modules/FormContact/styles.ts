import styled from 'styled-components'
import { device } from 'ui'

export const FormWrapper = styled.div`
  padding: 20px;
  width: 50%;
  border-radius: 20px;
  border: 2px solid white;
  & form {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`
