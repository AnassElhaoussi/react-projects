
import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Results } from './Results'
import { Navigate } from 'react-router-dom'


export const AppRoutes = () => {

  return (
    <div className='p-4'>
      <Routes>
        <Route path='/search'element={<Results />}>
          
        </Route>
        <Route path='/image' element={<Results />}>
          
        </Route>
        <Route path='/news' element={<Results />}>
          
        </Route>
        <Route path='/videos' element={<Results />}>
          
        </Route>
        <Route path='/' element={<Navigate to='search'/>}>

        </Route>
        
      </Routes>
    </div>

  )

}
