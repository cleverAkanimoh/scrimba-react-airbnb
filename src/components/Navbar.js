import React from 'react'
import logo from '../images/airbnb-logo.png';

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="AirBnB logo" className="nav--logo"/>
        </nav>
    )
}

export default Navbar;