
import React, {useState, useContext, useEffect} from 'react'
import { MovieContext } from './MovieContext'

const AddMovie = () => {
    
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext)

    useEffect(() => {
        setName('')
        setPrice('')
    }, [movies])
    
    const addMovie = e => {
        e.preventDefault()
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
    }


    return (
        <form onSubmit={addMovie}>
            <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} />
            <input type="text" name='price' value={price} onChange={e => setPrice(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie