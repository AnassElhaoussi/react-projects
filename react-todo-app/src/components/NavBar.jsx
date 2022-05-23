
import React, {useContext} from 'react'
import { TodosContext } from './TodosContext';

const NavBar = () => {

    const [todos, setTodos] = useContext(TodosContext)
   
    const completedTodos = todos.filter(({complete}) => {
        return complete == true
    })

    

    return (
        <div className='nav-bar'>
            <h1>Todoo</h1>
            <div className='infos'>
                <p>You made {todos.length} todos </p>
                <p>You completed {completedTodos.length} </p>
            </div>
            
            
        </div>


    )
}

export default NavBar;