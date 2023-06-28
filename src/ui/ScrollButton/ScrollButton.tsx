import React, { FC } from 'react'
import { Icon } from 'ui'
import { ButtonWrapper } from './styles'

export const ScrollButton: FC = () => {
  return (
    <ButtonWrapper className='scrollBtn'>
      <Icon name='ArrowDown' />
    </ButtonWrapper>
  )
}
