import React, { FC } from 'react'
import { ISkillCard } from './types'
import { Point, PointsWrapper, Title, Item, IconWrapper } from './styles'

export const SkillCard: FC<ISkillCard> = (props) => {
  const { icon, title, points } = props
  return (
    <Item>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      {points.map((element: string, index: number) => {
        return (
          <PointsWrapper key={index + 1}>
            <Point>{element}</Point>
          </PointsWrapper>
        )
      })}
    </Item>
  )
}
