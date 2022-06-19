import React, {useEffect} from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Main from './Main';
import { auth } from './firebase';
import { AuthContextProvider } from './AuthContext';


function App() {



  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Main />} />
        </Routes>
      </AuthContextProvider> 
    </Router>
  )
}

export default App;
