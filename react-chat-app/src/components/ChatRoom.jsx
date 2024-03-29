import React, {useState, useEffect, useRef} from 'react'
import { auth } from '../firebase'
import { LogoutOutlined, MoreOutlined, DeleteOutlined } from '@ant-design/icons'
import { useAuthContext } from '../Context/AuthContext'
import { db } from '../firebase'
import SendMessage from './SendMessage'




const ChatRoom = () => {

    const user = useAuthContext()
    const [isActive, setIsActive] = useState(false)
    const [messages, setMessages] = useState([])
    const namesArr = []
    const scroll = useRef()

    
    messages.map(message => {
        namesArr.push(message.displayName)
    })

    const newNamesArr = [...new Set(namesArr)]
    

    
    useEffect(() =>  {

        db.collection('messagesdata').orderBy('createdAt').onSnapshot(snapshot => {
            setMessages (
                snapshot.docs.map(doc => 
                    doc.data()
                )
            )

        })


    }, [])

    


    const userLogout = () => {
        auth.signOut()
    }

    const findFirstWord = (str) => {
        const i = str.indexOf(' ')
        if(i > 0){
            const newStr = str.substring(0, i)
            return newStr

        } else {
            return str
        }
    }

    



    return(
        <div className='bg-white h-screen'>
            <div className='flex justify-between items-center bg-blue-400 p-2 text-gray-100'>
                <h1 className='font-bold text-2xl '>YouChat</h1>
                <div className='flex gap-10 items-center'>  
                    <p className='cursor-pointer flex gap-2 items-center' onClick={userLogout}>
                    <LogoutOutlined /> Logout</p>

                </div>  
                    <MoreOutlined onClick={() => setIsActive(!isActive)}/>
            </div>
            <div className='min-h-full flex'>
                <div className='bg-gray-100 w-60' style={{display: !isActive ? "none" : "block"}}>
                    <h1 className='p-3'>Hello {findFirstWord(user.displayName)} 👋</h1>
                    <div className='flex flex-col gap-3 p-3'>
                        <p className='text-xl text-blue-500'>Users :</p>
                        {newNamesArr.map(name => (
                            <h1>{name}</h1>
                        ))}
                    </div>
                    

                    
                </div>
                <div className='flex flex-col w-screen py-4'>
                        <h1 className='font-bold text-2xl mb-14 text-center'>Chat Room</h1>
                        <div className='flex flex-col gap-4 text-xl  mx-10 mb-10'>
                           {messages.filter(message => message.text !== '').map(({createdAt, photoURL, text, uid, displayName}, key) => (
                                <div className={uid === auth.currentUser.uid ? 'flex justify-end' : 'flex justify-start'} >
                                    <div className={uid === auth.currentUser.uid ? 'flex items-center gap-4 bg-blue-500 text-white rounded-lg px-4 py-2' : 'flex items-center gap-4 bg-gray-200 rounded-lg px-4 py-2'}>  
                                        <img src={photoURL} className='h-10 rounded-full' />
                                        <h1 className=''>{text}</h1>                              
                                    </div>         
                                </div>         
                            ))}
                        </div>               
                    
                    
                    
                    <SendMessage scroll={scroll} />
                    <div ref={scroll}></div>
                    
                </div>
            </div>
            
           
        </div>
    )
    
}
    

export default ChatRoom