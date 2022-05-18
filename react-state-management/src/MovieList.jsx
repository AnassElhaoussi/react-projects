
import React, { useContext, useState } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'


const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        
        <div className='movies-container'>

            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id} /> 
                ))}

        </div>
    )
}

export default MovieList;