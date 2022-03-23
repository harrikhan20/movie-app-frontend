import React from 'react'
import { Link } from 'react-router-dom';
 function Header({welcomeMessage, clickToEnter}) {
    return (
        <nav>
            <h1>Welcome To The World Of {welcomeMessage}</h1>
           <Link to='/home'>{clickToEnter}</Link> 
        </nav>
    )
}

export default Header;