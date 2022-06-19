import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'


const Login = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')
    const navigate = useNavigate()

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(loginEmail, loginPass)
        .then(user => {
            navigate('/home')
        })
        .catch(arr => {
            console.log(arr)
        })
    }


    return (
        <div className='bg-blue-500 h-screen'>
            <div className='flex items-center justify-center h-screen'>
                <div className='flex gap-4 flex-col bg-gray-200 p-4 rounded-md '>
                    <div className='flex flex-col gap-2'>
                        <p>Email :</p>
                        <input type="text" className='outline-none p-1'
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        <p>Password :</p>
                        <input type="password" className='outline-none p-1' 
                        value={loginPass}
                        onChange={(e) => setLoginPass(e.target.value)}
                        /> 
                        <button className='bg-blue-400 text-white rounded' onClick={handleLogin}>Submit</button>
                    </div>
                    <div>
                        <p>Don't have an account ? <span>
                            <Link to='/'>
                                Sign Up
                            </Link>
                        </span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login