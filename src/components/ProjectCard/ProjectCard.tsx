import React, { FC } from 'react'
import { IProjectCard } from './types'
import {
  Card,
  CardsWrapper,
  CenterText,
  ProjectValue,
  TechListItem,
  Title,
  TotalValue,
} from './styles'

export const ProjectCard: FC<IProjectCard> = (props) => {
  const { title, technology, icon, yearTitle, year, roleTitle, role, stackTitle } = props
  return (
    <CardsWrapper>
      <Card>
        {icon && <CenterText>{icon}</CenterText>}
        <CenterText>{title}</CenterText>
        <div>
          <Title>{stackTitle}:</Title>
          <ul>
            {technology?.map((element: string, index: number) => (
              <TechListItem key={index}>{element}</TechListItem>
            ))}
          </ul>
        </div>
        <ProjectValue>
          <div>{roleTitle}:</div>
          <TotalValue>{role}</TotalValue>
        </ProjectValue>
        <ProjectValue>
          <div>{yearTitle}:</div>
          <TotalValue>{year}</TotalValue>
        </ProjectValue>
      </Card>
    </CardsWrapper>
  )
}
