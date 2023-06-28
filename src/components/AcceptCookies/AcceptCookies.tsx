import React, { FC, useEffect, useState } from 'react'
import clsx from 'clsx'
import { CookiesWrapper } from './styles'
import { Button } from 'ui'
import { useGetLanguage } from 'modules'

export const AcceptCookies: FC = () => {
  const [status, setStatus] = useState<string | null>(localStorage.getItem('accepted-cookies'))

  const { data } = useGetLanguage()

  useEffect(() => {
    if (!status) localStorage.removeItem('accepted-cookies')
    if (status !== 'true' && !!status) localStorage.setItem('accepted-cookies', 'true')
  }, [status, localStorage.getItem('accepted-cookies')])

  const setEventStatus = async () => {
    await localStorage.setItem('accepted-cookies', 'true')
    await setStatus('true')
  }

  return (
    <CookiesWrapper className={clsx(status ? { isHidden: status } : { isAccepted: !status })}>
      <p>{data?.first?.cookieText}</p>
      <Button text={data?.first?.btn} onClick={setEventStatus} />
    </CookiesWrapper>
  )
}
