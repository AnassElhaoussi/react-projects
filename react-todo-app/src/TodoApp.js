import React from 'react'
import './styles/index.css'
import NavBar from './components/NavBar';
import Todos from './components/Todos';
import Form from './components/Form';

function App() {
  return (
    <div className="todo-app">
      <NavBar />
      <div className='todo-list'>
        <Form />
        <Todos />
      </div>
    </div>
  );
}

export default App;
