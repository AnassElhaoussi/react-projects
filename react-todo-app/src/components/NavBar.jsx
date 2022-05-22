
import React, {useContext} from 'react'
import { TodosContext } from './TodosContext';

const NavBar = () => {

    const [todos, setTodos] = useContext(TodosContext)
    
    const newArr = todos.filter(todo => todo.name !== "")
    
    
    return (
        <div className='nav-bar'>
            <h1>Todoo</h1>
            <p>You made {newArr.length} todos </p>
        </div>



        

    )
}

export default NavBar;