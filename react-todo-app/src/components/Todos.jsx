
import React, {useState, useContext} from 'react'

import { TodosContext } from './TodosContext';

const Todos = () => {

    const [todos, setTodos] = useContext(TodosContext)

    
    return (
        <div className='todos'>
            {

                todos.filter(todo => todo.name !== "")
                .map(task => (
                    <div className='todo'>
                        <input type="checkbox" name='todo' />
                        <p>{task.name}</p>
                    </div>
                ))
            
            }
            
        </div>
    )
}

export default Todos;