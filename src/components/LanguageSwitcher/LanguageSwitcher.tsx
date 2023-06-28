import React, { FC } from 'react'
import clsx from 'clsx'
import { Switcher, ButtonStyle } from './styles'
import { ISwitcher } from './types'

export const LanguageSwitcher: FC<ISwitcher> = (props) => {
  const { language, onSubmit, displayStatus, setSidebarActive } = props
  const closeStatus = !!setSidebarActive && !!displayStatus
  return (
    <Switcher className={clsx({ isMobile: !!displayStatus })}>
      <ButtonStyle
        className={clsx({ isActive: language === 'rus' })}
        onClick={() => {
          onSubmit('rus')
          closeStatus && setSidebarActive(false)
        }}
      >
        rus
      </ButtonStyle>
      <i>/</i>
      <ButtonStyle
        className={clsx({ isActive: language === 'eng' })}
        onClick={() => {
          onSubmit('eng')
          setSidebarActive && displayStatus && setSidebarActive(false)
        }}
      >
        eng
      </ButtonStyle>
    </Switcher>
  )
}
