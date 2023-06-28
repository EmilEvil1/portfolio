import { ReactNode } from 'react'

export interface INavLink {
  icon: ReactNode | string
  text?: string
  href: string
  isSocial?: boolean
  isContacts?: boolean
}
