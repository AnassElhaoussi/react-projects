import React from 'react'
import { auth } from '../firebase'
import { LogoutOutlined } from '@ant-design/icons'



const ChatRoom = () => {

    const userLogout = () => {
        auth.signOut()
    }

    
    return(
        <div className='bg-gray-200 h-screen'>
            <div className='flex justify-between items-center bg-blue-400 p-2 text-gray-100'>
                <h1 className='font-bold text-2xl '>YouChat</h1>
                <p className='cursor-pointer flex gap-2 items-center' onClick={userLogout}>
                 <LogoutOutlined /> Logout</p>
            </div>
        </div>
    )
    
}
    

export default ChatRoom