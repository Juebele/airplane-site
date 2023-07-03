import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Footer() {
    const location = useLocation();

    const isAboutPage = location.pathname === '/about';

    return (
        <footer>
            <p id='footer'>Copyright 2023 James Uebele</p>
            <div>
            </div>
            <Link to={'/about'}>
                <button style={{ backgroundColor: isAboutPage ? 'gray' : 'initial' }}>
                    About us
                </button>
            </Link>
        </footer>
    )
}

export default Footer