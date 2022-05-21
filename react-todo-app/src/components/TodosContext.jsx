
import React, {createContext, useState} from 'react'

export const TodosContext = createContext()

export const TodosProvider = (props) => {

    const [todos, setTodos] = useState([
        {
            name: "Task example..",
            type: "pending"
        }
    ]) 

    return(
        <TodosContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodosContext.Provider>
    )
}

