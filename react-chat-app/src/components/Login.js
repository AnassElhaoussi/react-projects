import React from 'react'
import '../fonts.css'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase'
import 'firebase/compat/app'



const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-blue-600'>
        <div className='flex flex-col gap-5 bg-white py-6 px-10 rounded-md items-center'>
            <h1 className='font-bold text-2xl'>Welcome to Unichat !</h1>
            <div className='flex items-center gap-2 bg-blue-400 rounded-md text-white px-4 py-2 cursor-pointer hover:scale-105 transition-all'
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                <GoogleOutlined /> Sign in with Google
            </div>
            <div className='flex items-center gap-2 bg-blue-800 rounded-md text-white px-4 py-2 cursor-pointer hover:scale-105 transition-all'
            onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
            >
                <FacebookOutlined /> Sign in with Facebook
            </div>
            
            
        </div>
    </div>
  )
}

export default Login