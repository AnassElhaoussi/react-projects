
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import MovieCard from './MovieCard'

const BASE_URL = "http://www.omdbapi.com/"
const apiKey = "6919cef0"

const App = () => {

    useEffect(() => {
        fetchMovies('Batman')
    }, [])

    const [movies, setMovies ] = useState([])


    const fetchMovies = async (title) => {
        const response = await fetch(`${BASE_URL}?apiKey=${apiKey}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
        console.log(data.Search);

    }

    

    return (
        <div className='container'>
            <h1 className='title'>MovieLand</h1>
            <div className='input-field'>
                <input 
                type="text"
                placeholder='Search for movies..'
                />
                
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className='movies-cards'>
                            {movies.map(movie => (
                                <MovieCard name={movie.Title} image={movie.Poster} />
                            ))}

                        </div>
                    ) : (
                        <h2 className='noResults'>No results found</h2>
                    )
            }
            
        </div>
    )
}

export default App;