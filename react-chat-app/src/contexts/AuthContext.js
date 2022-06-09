
import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { auth } from "../firebase";
import Loading from "../components/Loading";

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {

    const [loading, setLoading ] = useState(true)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)
            if(user) navigate('/chat')
            
        })
    }, [user, navigate])

    if(loading){
        return <Loading />
    }

    const value = { user }
    

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}