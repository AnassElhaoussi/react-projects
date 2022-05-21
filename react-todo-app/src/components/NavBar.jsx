
import React, {useContext} from 'react'
import { TodosContext } from './TodosContext';

const NavBar = () => {

    const [todo, setTodo] = useContext(TodosContext) 
    return (
        <div className='nav-bar'>
            <h1>Todoo</h1>
            <p>You made {todo.length} todos until now !</p>  

        </div>

    )
}

export default NavBar;