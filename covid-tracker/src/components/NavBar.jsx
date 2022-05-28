
import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = ({darkMode, setDarkMode}) => {
  return (
    <div className='flex flex-wrap justify-between items-center px-5 py-2'>
      <Link to='/'>
        <h1 className='flex gap-1 text-4xl font-bold text-red-400'>Covid <span className='text-blue-500 text-4xl'>Tracker</span> </h1>
      </Link>
      <div className='flex gap-10 font-medium text-blue-400 '>
        <p className='cursor-pointer'>Filter by Country</p>
        <p className='cursor-pointer'>Filter by Region</p>
        <button onClick={() => setDarkMode(!darkMode)} className='bg-white text-black px-3 rounded cursor-pointer ml-5 font-medium dark:bg-black dark:text-white' >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  )
}

export default NavBar;