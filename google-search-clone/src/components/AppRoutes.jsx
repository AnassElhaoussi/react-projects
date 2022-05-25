
import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Results } from './Results'


export const AppRoutes = () => {

  return (
    <div className='p-4'>
      <Routes>
        <Route path='/'>
          
        </Route>
        <Route path='/images' element={<Results />}>
          
        </Route>
        <Route path='/news' element={<Results />}>
          
        </Route>
        <Route path='/videos' element={<Results />}>
          
        </Route>
      </Routes>
    </div>

  )

}
