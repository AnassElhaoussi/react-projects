
import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center h-screen'>
        <Circles color="#00BFFF" height={80} width={80}/>
        <h1>Loading...</h1>
    </div>
    
  )
}

export default Loading