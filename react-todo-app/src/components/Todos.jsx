
import React, {useState, useContext} from 'react'

import { TodosContext } from './TodosContext';

const Todos = () => {

    const [todos, setTodos] = useContext(TodosContext)

    const completeTodo = (i) => 

        setTodos(
            todos.map(
                (todo, k,) => 
                i === k 
                ? {
                    ...todo,
                    complete: !todo.complete
                } : todo

                
               
            )
        )


        

    return (
        <div className='todos'>
            <div className='top-sect'>
                <p className='title'>Your tasks here !</p>
                <button onClick={() => setTodos([])}>Clear all</button>
            </div>

            {
                todos.map((task, id) => (
                    <div className='todo'>
                        <input type="checkbox" onClick={() => completeTodo(id)}/>
                        <p
                        style={{
                            textDecoration: task.complete ? "line-through" : ""
                        }}
                        
                        >{task.name}</p>
                        
                        
                        
                    </div>
                ))
            
            }
            
        </div>
    )
}

export default Todos;