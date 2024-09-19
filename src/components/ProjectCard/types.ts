import { ReactNode } from 'react'

export interface IProjectCard {
  title: string
  description?: string
  icon?: ReactNode
  img?: string
  link?: string
  year?: number
  role?: string
  technology?: string[]
  yearTitle?: string
  roleTitle?: string
  stackTitle?: string
}
