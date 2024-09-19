import React from 'react'
import { IChildren } from './types'
import { ContentWrapper } from './styles'

export const Container = ({ children }: IChildren) => <ContentWrapper>{children}</ContentWrapper>
