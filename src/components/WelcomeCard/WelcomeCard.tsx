import React, { FC } from 'react'
import { CardWrapper } from './styles'
import { useGetLanguage } from 'modules'

export const WelcomeCard: FC = () => {
  const { data } = useGetLanguage()
  return (
    <CardWrapper>
      <div>
        {data?.first?.title} <span>{data?.first?.name}</span>
      </div>
      <div>{data?.first?.whoiam}</div>
    </CardWrapper>
  )
}
