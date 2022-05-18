
import {React, useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        
        {name:"Game of thrones", price:"$10", id:3254},
        {name:"Harry Poter", price:"$20", id:325454},
        {name:"Inception", price:"$110", id:325444}

      ])

    return (
        
        <MovieContext.Provider value={'Hey this works, Weird !'}>
            {props.children}
        </MovieContext.Provider>
    )
}