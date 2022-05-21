
import React, {useState, useContext} from 'react'

import { TodosContext } from './TodosContext';

const Todos = () => {

    const [todo, setTodo] = useContext(TodosContext)

    
    return (
        <div className='todos'>
            {todo.map(task => (
                <div className='todo'>
                    <input type="checkbox" name='todo' />
                    <p>{task.name}</p>
                </div>
            ))}
            
        </div>
    )
}

export default Todos;