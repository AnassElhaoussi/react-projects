import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <h1>Nav Bar</h1>
            <ul>
                <li>
                    <Link to='/tweets'>Tweets</Link>
                </li>
                <li>
                    <Link to='/recipes'>Recipes</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;