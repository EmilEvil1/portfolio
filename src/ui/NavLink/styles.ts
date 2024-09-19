import styled from 'styled-components'

export const LinkWrapper = styled.a`
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  & div {
    cursor: pointer;
  }
  &:hover {
    color: #f3ca2f;
  }
  &.SocialMedia {
    animation-duration: 1s;
    animation-name: slidein;
  }
  &.Contacts {
    animation-duration: 0.7s;
    animation-name: slideOut;
  }
  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }
    to {
      margin-left: 0%;
      width: 100%;
    }
  }

  @keyframes slideOut {
    from {
      margin-top: -200%;
      margin-left: -100%;
      width: -300%;
    }

    to {
      margin-top: 0%;
      margin-left: 0%;
    }
  }
  
}`
