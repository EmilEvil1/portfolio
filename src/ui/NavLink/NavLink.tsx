import React from 'react'
import { INavLink } from './types'
import { LinkWrapper } from './styles'
import clsx from 'clsx'

export const NavLink = (props: INavLink) => {
  const { text, icon, href, isSocial, isContacts, ...other } = props
  return (
    <LinkWrapper
      className={clsx({ SocialMedia: !!isSocial }, { Contacts: isContacts })}
      {...other}
      href={href ?? ''}
    >
      <div>{icon}</div>
      {!!text && <span>{text}</span>}
    </LinkWrapper>
  )
}
