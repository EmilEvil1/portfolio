import React, { FC } from 'react'
import clsx from 'clsx'
import { ISidebar } from 'components/Sidebar/types'
import {
  CopyRight,
  CopyRightNote,
  Line,
  SidebarBackground,
  SidebarBottomContent,
  SidebarClose,
  SidebarContainer,
  SidebarInner,
  SidebarTopContent,
} from './styles'
import { useLanguageContext } from 'context'
import { ContactInfo, LanguageSwitcher, SocialMedia } from 'components'
import { Icon } from 'ui'

export const Sidebar: FC<ISidebar> = (props) => {
  const { sidebarActive, setSidebarActive, onSubmit } = props
  const [language] = useLanguageContext()
  return (
    <>
      <SidebarBackground
        className={clsx({ isOpened: !sidebarActive })}
        onClick={() => setSidebarActive(!sidebarActive)}
      />
      <SidebarContainer className={clsx({ isHidden: !sidebarActive })}>
        <SidebarInner>
          <div>
            <SidebarTopContent>
              <ContactInfo />
              <Line />
              <LanguageSwitcher
                language={language}
                onSubmit={onSubmit}
                setSidebarActive={setSidebarActive}
                displayStatus
              />
            </SidebarTopContent>
          </div>
          <SidebarBottomContent>
            <SocialMedia />
            <Line />
            <CopyRightNote>
              <CopyRight>© evilEmil 2023</CopyRight>
              <CopyRight>All rights reserved</CopyRight>
            </CopyRightNote>
          </SidebarBottomContent>
          <SidebarClose>
            <Icon onClick={() => setSidebarActive(!sidebarActive)} name='Close' />
          </SidebarClose>
        </SidebarInner>
      </SidebarContainer>
    </>
  )
}
