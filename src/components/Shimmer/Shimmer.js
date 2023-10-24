import React from 'react'
import './Shimmer.scss'

function Shimmer() {
  return (
    <div className='shimmer_layer'>
    {Array(20).fill('').map((e)=><div className='cards'></div>)}
    </div>
  )
}

export default Shimmer
