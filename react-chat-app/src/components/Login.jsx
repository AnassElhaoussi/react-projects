
import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import { auth } from '../firebase'
import firebase from 'firebase/compat/app'


const Login = () => {

    
    return (
        <div className='bg-blue-400 h-screen'>
            <div className='flex items-center justify-center h-screen'>
                <div className='flex flex-col bg-gray-200 p-6 rounded-md gap-4'>
                    <h1 className='font-bold text-2xl'>Welcome to YouChat!</h1>
                    <button className='bg-gray-100 rounded p-2 flex items-center justify-center gap-2 hover:scale-105 transition-all'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    > <GoogleOutlined /> Login with Google</button>
                    <button className='bg-blue-700 rounded p-2 flex items-center justify-center gap-2 hover:scale-105 transition-all text-white'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                    ><FacebookOutlined /> Login with Facebook</button>
                </div>
                
            </div>
        </div>
    )
    
}

export default Login