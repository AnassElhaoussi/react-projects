
import React from 'react'

const MovieCard = ({name, image, year, type}) => {

    return (
        <div className='card'>
            <img 
            src={image !== "N/A" ? image: 'https://via.placeholder.com/400'} 
            />

            <p>{type}</p>
            <h2>{name}</h2>
            <p className='date'>{year}</p>
        </div>
    )
    
}


export default MovieCard;