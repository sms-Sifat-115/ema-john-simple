import React from 'react';
import logo from '../ema-john-resources/images/Logo.svg'
import './Header.css'


function Header() {
    return (
        <div>
            <nav className='header'>
                <a href="_"><img src={logo} alt="" /></a>
                <div>
                    <a href="/Shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;