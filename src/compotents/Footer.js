import React from 'react';
import logo from '../ema-john-resources/images/Logo.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <a href="#"><img src={logo} alt="" /></a>
            <p>ALL RIGHTS ARE RESERVED TO EMA-JOHN SHOPPING CART .Co || TENESSE, USA</p>
            <p>@2022</p>
        </div>
    );
};

export default Footer;