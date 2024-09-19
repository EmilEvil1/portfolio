import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  right: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  background-size: 14px auto;
  border-radius: 50%;
  animation: bounce 2s infinite;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    border: 2px solid rgb(243, 202, 47);
  }
  & svg {
    cursor: pointer;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
