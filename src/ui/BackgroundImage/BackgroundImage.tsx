import React, { FC, Suspense } from 'react'
import { Img } from './style'

interface IImg {
  src: string | undefined
  alt: string
}

export const BackgroundImage: FC<IImg> = (props) => {
  const { src, alt } = props
  return (
    <Suspense>
      <Img {...props} src={src && process.env.PUBLIC_URL + src} alt={alt} />
    </Suspense>
  )
}
