import React, {useState} from 'react';
import './index.css'
import NavBar from './components/NavBar';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='bg-gray-200 min-h-screen'>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      
    </div>
  );
}

export default App;
