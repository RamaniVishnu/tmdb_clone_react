import React from 'react'
import './Shimmer.scss'

function Shimmer() {
  return (
    <div className='shimmer_layer'>
    <div className='banner'>
    </div>
    <div className='links'></div>
    {Array(10).fill('').map((e)=><div className='cards'></div>)}
    </div>
  )
}

export default Shimmer