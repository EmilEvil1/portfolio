import styled from 'styled-components'

export const SortBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  & svg {
    cursor: pointer;
    #upArrow {
      fill: white;
    }
    #downArrow {
      fill: #f3ca2f;
    }
  }
  &.isSorted {
    & svg {
      #upArrow {
        fill: #f3ca2f;
      }
      #downArrow {
        fill: white;
      }
    }
  }
`
