
import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

const Chat = () => {

    const navigate = useNavigate()
    

    const Logout = async () => {
        await auth.signOut()
        navigate('/')
    }


  return (
    <div className=''>
        <div className='flex justify-between items-center px-4 py-2 font-bold text-white bg-blue-500'>
            <h1 className='text-3xl'>UniChat</h1>
            <p className='cursor-pointer' onClick={Logout}>Logout</p>
        </div>
    </div>
    
  )
}

export default Chat