import React from 'react'
import '../index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ChatRoom from './ChatRoom';
import { AuthProvider } from '../Context/AuthContext';
import '../fonts.css'



function App() {
  return (
    <div className=''>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/chatroom' element={<ChatRoom />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
    
  );
}

export default App;
