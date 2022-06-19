
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'


const SignUp = () => {

  const [name, setName] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPass, setSignUpPass] = useState('')
  const navigate = useNavigate()

  
  

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(signUpEmail, signUpPass)
    .then(userCredentials => {
        const user = userCredentials.user
        navigate('/login')

    }).catch(error => {
        console.log(error.message);
    })
  }
  
  

  return (
    <div className="bg-purple-400 h-screen">
      <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col gap-4 bg-gray-200 p-4 rounded-md'>
          <h1 className='text-center font-bold text-xl'>Register</h1>
          <div className='flex flex-col gap-2'>
            <p>Name :</p>
            <input type="text" className='outline-none p-1'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <p>Email :</p>
            <input type="text" className='outline-none p-1' 
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            />
            <p>Password :</p>
            <input type="password" className='outline-none p-1'
            value={signUpPass}
            onChange={(e) => setSignUpPass(e.target.value)}
            />
            <button className='bg-blue-500 text-white rounded' onClick={handleSignUp}>Submit</button>
          </div>
          <div className='text-xs'>
            <p>You already have an account ? <span className='cursor-pointer'>
                <Link to='/login'>
                    Login
                </Link>
            </span></p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default SignUp