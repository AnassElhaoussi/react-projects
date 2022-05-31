import './index.css'
import React from 'react'
import { Link , Route, Routes} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { NavBar, HomePage, Exchanges, CryptoDetails, CryptoCurrencies, News } from './components';


function App() {
  return (
    <div className="bg-gray-200">
        <div className='navbar'>
          <NavBar />
        </div>
        <div className='main'>
          <Routes>
            <Route path='/' element={<HomePage />}/>  
            <Route path='/cryptocurrencies' element={<CryptoCurrencies />}/>
            <Route path='/crypto/:coindId' element={<CryptoDetails />}/>  
            <Route path='/exchanges' element={<Exchanges />}/>  
            <Route path='/news' element={<News />}/>  
          </Routes>
    </div>
      
      <div className="footer">
        
      </div>
      
    </div>
  );
}

export default App;
