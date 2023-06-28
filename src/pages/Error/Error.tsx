import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'components'
import { useErrorContext } from 'context'
import { IError } from './types'
import { ErrorCode, ErrorText, ErrorWrapper } from './styles'

export const Error: FC<IError> = (props) => {
  const { text } = props
  const [error] = useErrorContext()
  const navigate = useNavigate()

  useEffect(() => {
    !error && navigate('/')
  }, [])

  return (
    <Container>
      <ErrorWrapper>
        <ErrorCode>{error?.status}</ErrorCode>
        <ErrorText>{text}</ErrorText>
      </ErrorWrapper>
    </Container>
  )
}
