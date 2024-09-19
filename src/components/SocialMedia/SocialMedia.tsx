import React, { FC } from 'react'
import { SocialMediaWrapper } from './styles'
import { NavLink, Icon } from 'ui'

export const SocialMedia: FC = () => {
  return (
    <SocialMediaWrapper>
      {/* <NavLink icon={<Icon name='Vk' />} href='https://vk.com/emil.evil' isSocial /> */}

      <NavLink icon={<Icon name='Tg' />} href='https://telegram.im/@evilEmil' isSocial />
      <NavLink icon={<Icon name='GitHub' />} href='https://github.com/EmilEvil1' isSocial />
      <NavLink
        icon={<Icon name='Inst' />}
        href='https://www.instagram.com/hardcorestyle1/'
        isSocial
      />
    </SocialMediaWrapper>
  )
}
