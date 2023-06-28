import { FormEvent } from 'react'

export interface IInput {
  inputName: string
  value: string
  labelName?: string
  placeholder?: string
  onChange: (e: FormEvent<HTMLInputElement>) => void
  error?: string | boolean | undefined
  helperText?: string | boolean | undefined
  type?: string
  htmlFor?: string
}
