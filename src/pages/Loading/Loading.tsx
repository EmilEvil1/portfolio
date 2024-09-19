import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Spinner } from 'ui'
import { CountWrapper, RotateContainer } from '../styles'

export const Loading: FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [count, setCount] = useState<number>(0)

  useEffect(() => outNum(100), [])

  useEffect(() => {
    if (loading) setTimeout(() => setLoading(false), 4000)
  }, [])

  const outNum = (num: number) => {
    const time = 3800
    const step = 1
    let n = 0
    const t = Math.round(time / (num / step))
    const interval = setInterval(() => {
      n = n + step
      if (n === num) clearInterval(interval)
      setCount(n)
    }, t)
  }

  return (
    <>
      {loading ? (
        <RotateContainer>
          <CountWrapper>{count}</CountWrapper>
          <Spinner />
        </RotateContainer>
      ) : (
        <>{children}</>
      )}
    </>
  )
}
