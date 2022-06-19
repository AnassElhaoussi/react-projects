
import React, {createContext, useContext, useState, useEffect, useTransition} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebase'


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){

                navigate('/home')
                setUser(user)
                setLoading(false)

            } else {

                navigate('/')
                setLoading(false)

            }
        })
    }, [])

    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>
    )

}





