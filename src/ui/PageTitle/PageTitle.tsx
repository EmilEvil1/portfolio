import React, { FC } from 'react'
import { IPageTitle } from './types'
import { TitleDefault, TitleWrapper } from './styles'
import { useLanguageContext } from 'context'

export const PageTitle: FC<IPageTitle> = (props) => {
  const { name } = props
  const [languageType] = useLanguageContext()
  return (
    <TitleWrapper>
      <TitleDefault>{languageType === 'rus' ? 'Мои' : 'My'}</TitleDefault>
      <span>{name}</span>
    </TitleWrapper>
  )
}
