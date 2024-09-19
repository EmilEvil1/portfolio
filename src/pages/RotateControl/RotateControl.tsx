import React, { FC, ReactNode } from 'react'
import { useMobileDisplaySize } from 'hooks'
import { RotateContainer } from '../styles'
import { Icon } from 'ui'

export const RotateControl: FC<{ children: ReactNode }> = ({ children }) => {
  const { height } = useMobileDisplaySize()

  if (height < 600) {
    return (
      <RotateContainer>
        <Icon name='Gif' />
      </RotateContainer>
    )
  }
  return <>{children}</>
}
