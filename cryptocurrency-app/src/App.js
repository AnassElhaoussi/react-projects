import './index.css'
import React from 'react'
import { Link , Route, Routes} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { NavBar, HomePage, Exchanges, CryptoDetails, CryptoCurrencies, News } from './components';


function App() {
  return (
    <div className="bg-gray-200 flex overflow-hidden">
        <div className=''>
          <NavBar />
        </div>
      <div className=''>
        <div className='main'>
            <Routes>
              <Route path='/' element={<HomePage />}/>  
              <Route path='/cryptocurrencies' element={<CryptoCurrencies />}/>
              <Route path='/crypto/:coindId' element={<CryptoDetails />}/>  
              <Route path='/exchanges' element={<Exchanges />}/>  
              <Route path='/news' element={<News />}/>  
            </Routes>
        
          </div>
        <div className='bg-slate-900 p-4 w-screen text-center'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            CryptoVerse <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
            
        </div>
      </div>
    </div>
      
  );
}

export default App;
