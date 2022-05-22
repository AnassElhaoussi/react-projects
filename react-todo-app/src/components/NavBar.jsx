
import React, {useContext} from 'react'
import { TodosContext } from './TodosContext';

const NavBar = () => {

    const [todos, setTodos] = useContext(TodosContext)
    
    
    return (
        <div className='nav-bar'>
            <h1>Todoo</h1>
            <p>You made {todos.length} todos </p>
        </div>



    )
}

export default NavBar;