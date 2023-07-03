import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Footer() {
    const location = useLocation();

    const isAboutPage = location.pathname === '/about';
    const isHomePage = location.pathname === '/'

    return (
        <footer>
            <p id='footer'>Copyright 2023 James Uebele</p>
            <div>
            </div>
            <Link to={'/'}>
                <button style={{ color: isHomePage ? 'white' : 'black' , backgroundColor: isHomePage ? 'gray' : 'transparent' , borderRadius: '0 10px 0 0',}}>
                    Home
                </button>
            </Link>
            <Link to={'/about'}>
                <button style={{ color: isAboutPage ? 'white' : 'black' , backgroundColor: isAboutPage ? 'gray' : 'transparent' , borderRadius: '10px 10px 0 0',}}>
                    About us
                </button>
            </Link>
        </footer>
    )
}

export default Footer