
import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

export const NavBar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-3 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-grap-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to='/'>
          <p className='text-2xl font-bold py-1 dark:text-gray-300 text-black'>
            Goggle
          </p>
        </Link>
        <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-500 dark:text-gray-900 bg-white rounded py-1 px-2 hover:shadow-sm'>
          {darkTheme ? 'Dark' : 'Light'}
        </button>
        
      </div>
      <Search />
    </div>
  )
}
