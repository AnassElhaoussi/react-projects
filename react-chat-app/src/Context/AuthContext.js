
import React, {useState, useEffect, useContext, createContext} from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                navigate('/chatroom')
                setUser(user)
                setLoading(false)
                console.log(user)       

            } else {
                navigate('/')
                setLoading(false)
            }
        })

    }, [])

    if(loading){
        return <Loading />
    }

   


    return(
        <AuthContext.Provider value={user} >
            {!loading && children}
        </AuthContext.Provider>
    )
}

