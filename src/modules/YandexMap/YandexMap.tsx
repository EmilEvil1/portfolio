import React, { FC } from 'react'
import { YMaps, Map } from '@pbe/react-yandex-maps'
import { IMap } from './types'
import { MapWrapper } from './styles'

export const YandexMap: FC<IMap> = (props) => {
  const { width, height } = props
  return (
    <MapWrapper>
      <YMaps query={{ lang: 'en_US' }}>
        <Map
          width={width}
          key='eef841e5-c60b-4c91-a933-d22090ea8fa7'
          height={height}
          defaultState={{
            center: [56.141, 40.123123],
            zoom: 9,
            behaviors: ['disable(`scrollZoom`)'],
            controls: [],
          }}
        />
      </YMaps>
    </MapWrapper>
  )
}
