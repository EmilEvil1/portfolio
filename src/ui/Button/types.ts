import { ReactNode } from 'react'

export interface IButton {
  icon?: ReactNode
  text?: string
  onClick: () => void
  disabled?: boolean | undefined
}
