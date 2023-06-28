import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
`

export const ModalContent = styled.div`
  position: relative;
`

export const Background = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  background: black;
  opacity: 0.3;
  transition: opacity 0.5s ease-in-out;
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChildrenWrapper = styled.div`
  margin: 0 20px;
  color: black;
  background: white;
  border-radius: 10px;
  z-index: 15;
`
