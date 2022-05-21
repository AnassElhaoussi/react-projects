import React from 'react'
import './styles/index.css'
import NavBar from './components/NavBar';
import Todos from './components/Todos';
import Form from './components/Form';
import { TodosProvider } from './components/TodosContext';


function App() {
  return (
    <div className="todo-app">
      <TodosProvider>
        <NavBar />
        <div className='todo-list'>
          <div className='container'>
            <Form />
            <Todos />
          </div>
          
        </div>
      </TodosProvider>
    </div>
  );
}

export default App;
