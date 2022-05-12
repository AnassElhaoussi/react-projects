import React from 'react'

const MovieCard = ({name, image}) => {

    return (
        <div className='card'>
            <img 
            src={image !== "N/A" ? image: 'https://via.placeholder.com/400'} 
            />
            <p>MOVIE</p>
            <h2>{name}</h2>
        </div>
    )
    
}

export default MovieCard;