
import React, {useContext, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { TodosContext } from './TodosContext';



const Form = () => {

    

    const [todo, setTodo] = useContext(TodosContext)
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue('')
    }, [todo])
    
    const getUserValue = (e) => {
        setValue(e.target.value)

    }

    const submitTask = (e) => {
        e.preventDefault()
        setTodo(prevTodos => [...prevTodos, {name: value}])
    }
    

    return (
        <div className='form'>
            <FontAwesomeIcon icon={faListCheck} onClick={submitTask} />
            <input type="text" placeholder='Your task..' value={value} onChange={getUserValue} />
        </div>
    )
}

export default Form;