import React from 'react'

export const Spinner = () => {
  return (
    <div>
      <div className='loader'>
        <div className='circles'>
          <span className='one'></span>
          <span className='two'></span>
          <span className='three'></span>
        </div>
        <div className='pacman'>
          <span className='top'></span>
          <span className='bottom'></span>
          <span className='left'></span>
          <div className='eye'></div>
        </div>
      </div>
    </div>
  )
}
