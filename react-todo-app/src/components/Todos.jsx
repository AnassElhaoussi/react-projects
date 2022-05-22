
import React, {useState, useContext} from 'react'

import { TodosContext } from './TodosContext';

const Todos = () => {

    const [todos, setTodos] = useContext(TodosContext)


    const completeTodos = (i) => 
        setTodos(
            todos.map(
                (todo, k) => 
                k === i
                ? {
                    ...todo,
                    complete: !todo.complete
                }
                : todo
            )

        )
    
    return (
        <div className='todos'>
            <div className='top-sect'>
                <p className='title'>Your tasks here !</p>
                <button onClick={() => setTodos([])}>Clear all</button>
            </div>

            {
                todos.map((task, id, {complete}) => (
                    <div className='todo'>
                        <input type="checkbox"/>
                        <p  onClick={() => completeTodos(id)} 
                        style= {{
                            textDecoration: complete ? "line-through" : ""
                        }}>{task.name}</p>
                    </div>
                ))
            
            }
            
        </div>
    )
}

export default Todos;