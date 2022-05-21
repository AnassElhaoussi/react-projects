
import React from 'react'

const Todos = () => {
    return (
        <div className='todos'>
            <div className='todo'>
                <input type="checkbox" name='todo' />
                <p>This is my first Todo</p>
            </div>
            <div className='todo'>
                <input type="checkbox" name='todo' />
                <p>This is my first Todo</p>
            </div>
        </div>
    )
}

export default Todos;