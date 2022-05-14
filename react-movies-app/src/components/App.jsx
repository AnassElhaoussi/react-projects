
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import MovieCard from './MovieCard'

const BASE_URL = "http://www.omdbapi.com/"
const apiKey = "6919cef0"

const App = () => {


    const [movies, setMovies ] = useState([])
    const [search, setSearch] = useState()

    


    const fetchMovies = async (title) => {
        const response = await fetch(`${BASE_URL}?apiKey=${apiKey}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
        console.log(data.Search);

    }


    useEffect(() => {
        fetchMovies('Batman')
    }, [search])

 
    
    return (
        <div className='container'>
            <h1 className='title'>MovieLand</h1>
            <div className='input-field'>
                <input 
                type="text"
                value={search}
                placeholder='Search for movies..'
                onChange={(e) => setSearch(e.target.value)}
                />

                
                <div className='icon' onClick={() => fetchMovies(search)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
                
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className='movies-cards'>
                            {movies.map(movie => (
                                <MovieCard name={movie.Title} image={movie.Poster} year={movie.Year} type={movie.Type.toUpperCase()}/>
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