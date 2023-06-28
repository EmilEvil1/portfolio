import React, { FC } from 'react'
import { ContactInfoWrapper } from './style'
import { Icon, NavLink } from 'ui'

export const ContactInfo: FC = () => {
  return (
    <ContactInfoWrapper>
      <NavLink
        icon={<Icon name='Mail' />}
        text='emil.evilHCS@gmail.com'
        href='mailto: emil.evilHCS@gmail.com'
        isContacts
      />
      <NavLink
        icon={<Icon name='Phone' />}
        text='+7 (915) 778-03-08'
        href='tel:+79157780308'
        isContacts
      />
    </ContactInfoWrapper>
  )
}
