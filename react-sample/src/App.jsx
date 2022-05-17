
import React, { useState } from 'react'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Tweets from './Tweets'

function App(){
  
  return (
    <div className='App'>
      <Router>
        <Nav />   
        <Routes> 
          <Route path='/about' element={<About />}/>
          <Route path="/tweets" element={<Tweets/>} />
          <Route path='/' element={<HomePage />} />
        </Routes>  
      </Router>
    </div>
  )

  
}

const HomePage = () => {
  return (
    <h1>Hello it's the home page</h1>
  )

}


export default App;
