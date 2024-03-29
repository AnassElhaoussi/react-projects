
import React, {createContext, useState, useEffect} from 'react'


export const TodosContext = createContext()

export const TodosProvider = (props) => {

    const [todos, setTodos] = useState([
        {
            name: "Task example",
            complete: false
        }
    ])

    
    
    return(
        <TodosContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodosContext.Provider>
    )
}

