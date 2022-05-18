
import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div className='nav-container'>
            <h1>Nav bar</h1>
            <p>Number of movies : {movies.length} </p>
         </div>
    )
    
}

export default Nav;