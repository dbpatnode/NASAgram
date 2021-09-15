import React from 'react';
import './Header.style.scss'
import logo from './Antenna.png'

const Header = () => {
    return (
        <div class="header">
            <div className="icons">
                <img src={logo} alt="logo" ></img>
                <a className="logo">NASAgram</a>
            </div>
        </div>
    );
};

export default Header;