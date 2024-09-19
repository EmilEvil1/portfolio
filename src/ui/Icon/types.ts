import { ReactNode } from 'react'

export interface IconProperties {
  className?: string
  name: string | undefined
  onClick?: () => void
}

export type IconObject = {
  [name: string]: () => ReactNode
}
