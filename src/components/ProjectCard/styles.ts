import styled from 'styled-components'

export const CardsWrapper = styled.div`
  display: flex;
`

export const Card = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`

export const CenterText = styled.div`
  text-align: center;
`

export const ProjectValue = styled.div`
  margin: 10px 0;
  display: flex;
  gap: 5px;
`

export const TotalValue = styled.div`
  color: #f3ca2f;
`

export const TechListItem = styled.li`
  color: #f3ca2f;
  font-size: 0.7rem;
  display: flex;
  gap: 5px;
  &:before {
    content: '\\2022';
    color: white;
  }
`

export const Title = styled.div`
  margin: 10px 0;
`
