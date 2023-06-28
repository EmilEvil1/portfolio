import React, { FC, useState } from 'react'
import { ButtonsWrapper, HeaderInner, HeaderWrapper } from './style'
import { useLanguageContext } from 'context'
import { Icon } from 'ui'
import { ContactInfo, SocialMedia, Container, Sidebar, LanguageSwitcher } from 'components'
import { useChangeLanguage } from 'modules'

export const Header: FC = () => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false)
  const [language, setLanguage] = useLanguageContext()
  const contactFormApi = useChangeLanguage(language)

  const onSubmit = async (type: string) => {
    await setLanguage(type)
    await contactFormApi.refetch()
  }

  return (
    <>
      <HeaderWrapper>
        <Container>
          <HeaderInner>
            <ContactInfo />
            <SocialMedia />
            <ButtonsWrapper>
              <LanguageSwitcher language={language} onSubmit={onSubmit} />
              <Icon onClick={() => setSidebarActive(!sidebarActive)} name='Menu' />
            </ButtonsWrapper>
          </HeaderInner>
        </Container>
      </HeaderWrapper>
      <Sidebar
        onSubmit={onSubmit}
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      />
    </>
  )
}
