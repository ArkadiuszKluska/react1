import React from 'react'
import zdjecie from '../assets/abc.jpg'

const Image = () => {
  return (
    <div className='rounded-sm sm:bg-indigo-300 border-2 border-solid border-indigo-300'><img src={zdjecie} className='rounded-full w-200 h-200'></img></div>
  )
}

export default Image