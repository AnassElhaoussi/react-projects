
import React from 'react'

function Tweets({name, message}){

    return(
        <div className='tweet'>
            <h1>{name}</h1>
            <p>{message}</p>
        </div>
    )

}

export default Tweets;