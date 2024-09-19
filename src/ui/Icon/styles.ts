import styled from 'styled-components'

export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &.pop-up {
    position: absolute;
    right: 20px;
    top: -30px;
  }
  @media (max-width: 1440px) {
    cursor: default;
  }
  svg {
    fill: white;
    path {
      transition: all 0.3s ease-in-out;
    }
  }
  &:hover {
    svg {
      fill: #f3ca2f;
    }
    #menu {
      path {
        stroke: #f3ca2f;
      }
    }
  }
`
export const IconGif = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 50%;
  }
`
