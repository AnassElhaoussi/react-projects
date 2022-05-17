
import React from 'react'
import { Link } from 'react-router-dom';
 
const Nav = () => {
    return(
        <nav>
            <h1>Navigation bar</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/tweets'>Tweets</Link>
                </li>
            </ul>
        </nav>
    )
    
}

export default Nav;