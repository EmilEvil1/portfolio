import React, { FC, useState } from 'react'
import { ContentWrapper, SlideWrapper, TitleWrapper } from '../styles'
import { useMobileDisplaySize } from 'hooks'
import { Button, PageTitle } from 'ui'
import { Modal, Container } from 'components'
import { FormContact, useGetLanguage, YandexMap } from 'modules'

export const SlideContacts: FC = () => {
  const { width } = useMobileDisplaySize()
  const [open, setOpen] = useState<boolean>(false)
  const { data } = useGetLanguage()
  return (
    <>
      <SlideWrapper>
        <Container>
          <TitleWrapper>
            <PageTitle name={data?.fourth?.title} />
            {width < 768 && (
              <div>
                <Button onClick={() => setOpen(!open)} text={data?.fourth?.btn} />
              </div>
            )}
          </TitleWrapper>
          <ContentWrapper>
            <FormContact />
            {width > 768 && <YandexMap width='100%' height='100%' />}
          </ContentWrapper>
        </Container>
      </SlideWrapper>
      {open && (
        <Modal status={open} handleOpen={() => setOpen(!open)}>
          <YandexMap width='500px' height='500px' />
        </Modal>
      )}
    </>
  )
}
