import React, { FC, useState } from 'react'
import clsx from 'clsx'
import { IModal } from './types'
import { ModalWrapper, Background, ContentWrapper, ChildrenWrapper, ModalContent } from './styles'
import { Icon } from 'ui'

export const Modal: FC<IModal> = (props) => {
  const { status, handleOpen, children } = props
  const [open] = useState<boolean>(status)

  return (
    <>
      {open && (
        <ModalWrapper>
          <ContentWrapper className={clsx({ isFocused: open })}>
            <Background onClick={(prev) => handleOpen(!prev)} />
            <ModalContent onClick={(prev) => handleOpen(!prev)} style={{ position: 'relative' }}>
              <Icon className='pop-up' name='Close' />
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </ModalContent>
          </ContentWrapper>
        </ModalWrapper>
      )}
    </>
  )
}
