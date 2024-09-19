import React, { FC } from 'react'
import clsx from 'clsx'
import { Icon } from 'ui'
import { ISortBtn } from './types'
import { SortBtn } from './style'

export const SortButton: FC<ISortBtn> = (props) => {
  const { sortedStatus, action, up, down } = props
  return (
    <SortBtn className={clsx({ isSorted: !sortedStatus })} onClick={() => action(sortedStatus)}>
      <Icon name='SortArrows' />
      <div>{sortedStatus ? up : down}</div>
    </SortBtn>
  )
}
