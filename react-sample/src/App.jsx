
import React, { useState } from 'react'; 
import {BrowserRouter, Route,Routes, Switch} from 'react-router-dom'
import Tweets from './Tweets'

function App(){
  

  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/tweets" element={<Tweets/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )

  
}


export default App;
