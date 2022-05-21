
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
    return (
        <div className='form'>
            <FontAwesomeIcon icon={faListCheck} />
            <input type="text" placeholder='Your task..' />
        </div>
    )
}

export default Form;