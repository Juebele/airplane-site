import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Footer() {
    const location = useLocation();

    const isHomePage = location.pathname === '/'
    const isAboutPage = location.pathname === '/about';
    const isNewsPage = location.pathname === '/news'

    return (
        <footer className='container-footer'>
            <div id='footer-left'>
                {/* These buttons change colors based on the active tab set by the route */}
                <Link to={'/'}>
                    <button style={{ color: isHomePage ? 'white' : 'black', backgroundColor: isHomePage ? 'gray' : 'transparent', borderRadius: '0 10px 0 0', }}>
                        Home
                    </button>
                </Link>
                <Link to={'/about'}>
                    <button style={{ color: isAboutPage ? 'white' : 'black', backgroundColor: isAboutPage ? 'gray' : 'transparent', borderRadius: '10px 10px 0 0', }}>
                        About us
                    </button>
                </Link>
                <Link to={'/news'}>
                    <button style={{ color: isNewsPage ? 'white' : 'black', backgroundColor: isNewsPage ? 'gray' : 'transparent', borderRadius: '10px 10px 0 0', }}>
                        News
                    </button>
                </Link>
            </div>
            <div id='footer-right'>
                <p>Copyright 2023 James Uebele</p>
            </div>
        </footer>
    )
}

export default Footer