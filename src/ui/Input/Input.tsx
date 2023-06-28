import React, { FC } from 'react'
import { IInput } from './types'
import { ErrorText, InputElement, InputWrapper, Label } from './styles'

export const Input: FC<IInput> = (props) => {
  const {
    inputName,
    onChange,
    value,
    error,
    placeholder,
    labelName,
    type,
    helperText,
    htmlFor,
    ...other
  } = props
  return (
    <InputWrapper>
      <Label htmlFor={htmlFor}>{labelName}</Label>
      <InputElement
        type={type ?? 'text'}
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...other}
      />
      <ErrorText>{error && helperText}</ErrorText>
    </InputWrapper>
  )
}
