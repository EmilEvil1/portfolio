import React, { FC } from 'react'
import { ISortBtn } from './types'
import { SortBtn } from './style'
import { Icon } from 'ui'
import clsx from 'clsx'

export const SortButton: FC<ISortBtn> = (props) => {
  const { sortedStatus, action } = props
  return (
    <SortBtn className={clsx({ isSorted: !sortedStatus })} onClick={() => action(sortedStatus)}>
      <Icon name='SortArrows' />
      <div>{sortedStatus ? 'По убыванию' : 'По возрастанию'}</div>
    </SortBtn>
  )
}
