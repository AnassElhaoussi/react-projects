import React from 'react'
import { auth } from './firebase'

const Main = () => {

  const userLogout = () => {
    auth.signOut()
  }  

  return (
    <div className='flex justify-between'>
        <h1>Main</h1>
        <p onClick={userLogout} >Logout</p>
    </div>
  )
}

export default Main