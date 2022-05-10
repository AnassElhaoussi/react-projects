
import React from 'react'

function Tweets({name, message}){

    return(
        <div className='tweet'>
            <input type="text" placeholder='tweet someting' name="" id="" />
            <h1>{name}</h1>
            <p>{message}</p>
        </div>
    )

}

export default Tweets;