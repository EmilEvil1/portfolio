import React, { FC } from 'react'
import { IButton } from 'ui/Button/types'
import { ButtonStyled } from 'ui/Button/style'

export const Button: FC<IButton> = (props) => {
  const { icon, text, onClick, disabled = false, ...other } = props
  return (
    <ButtonStyled type='button' disabled={disabled} {...other} onClick={onClick}>
      {icon}
      {text && <span>{text}</span>}
    </ButtonStyled>
  )
}
