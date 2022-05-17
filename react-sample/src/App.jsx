
import React, { useEffect, useState } from 'react'; 
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Tweets from './Tweets';
import Recipes from './Recipes';
import RecipeElement from './Item'

function App(){
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/tweets' element={<Tweets />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/item' element={<RecipeElement />} />
        <Route path='/' element={<HomePage />} />
        
      </Routes>
    </Router>
      
  )
}



const HomePage = () => {
  return (
    <h1>This is the home page</h1>
  )
}


export default App;
