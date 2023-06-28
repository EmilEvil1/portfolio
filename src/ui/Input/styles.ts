import styled from 'styled-components'

export const InputElement = styled.input`
  width: 100%;
  padding-bottom: 7px;
  background: transparent;
  outline: none;
  border: none;
  color: white;
  font-size: 1rem;
  border-bottom: 1px solid white;
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`

export const Label = styled.label`
  margin-bottom: 10px;
`

export const ErrorText = styled.span`
  position: absolute;
  bottom: -25px;
  color: red;
`
