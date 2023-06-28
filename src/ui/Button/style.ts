import styled from 'styled-components'

export const ButtonStyled = styled.button`
  padding: 0.75rem 1.2rem;
  border: 1px solid white;
  border-radius: 0.75rem;
  outline: none;
  background: none;
  margin: 0;
  color: white;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  user-select: none;
  text-align: center;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  @media (max-width: 528px) {
    padding: 3px 16px;
    font-size: 0.4rem;
    line-height: 1rem;
    span {
      font-size: 0.8rem;
    }
  }
  svg path {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    background: none;
    color: #f3ca2f;
    & svg path {
      stroke: #f3ca2f;
      transition: all 0.3s ease-in-out;
    }
  }
  //&:focus {
  //  background: aqua;
  //  opacity: 0.7;
  //  transition: .3s ease-in-out;
  //}
  //
  //&:active {
  //  background: aqua;
  //  opacity: 0.7;
  //  transition: .3s ease-in-out;
  //}
  &:disabled {
    color: black;
    cursor: not-allowed;
    background: gray;
    opacity: 0.7;
    transition: 0.3s ease-in-out;
  }
`
