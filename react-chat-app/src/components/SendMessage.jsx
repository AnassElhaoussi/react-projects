
import React, {useState} from 'react'
import { db } from '../firebase'
import { useAuthContext } from '../Context/AuthContext'
import firebase from 'firebase/compat/app'



const SendMessage = () => {

    const [value, setValue] = useState('')

    const user = useAuthContext()

    const sendMessage =  async (e) => {
        e.preventDefault()

        const { photoURL, uid } = user

        
        
        await db.collection('messagesdata').add({
            text: value,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()

        })

        setValue('')
        
        
    }

    

    return(
        <div className=''>
            <form onSubmit={sendMessage}>
                <input 
                className='bg-gray-200 w-screen py-2 outline-none fixed bottom-0 text-center' 
                placeholder='Type your message..'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            
                />
                <button type='submit' className='fixed bottom-2 right-4'>Enter</button>
            </form>
        </div>
    )
}

export default SendMessage