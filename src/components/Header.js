import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../Assets/hangar-logo.png'

const Header = () => {
    return (
        <div class='container-1'>
            <div id='item-1'>
                <button class='blank-button'>
                    <Link to={'/'}>
                        <img id='image-1' src={logo} alt="Logo" />
                    </Link>
                </button>
            </div>
            <div id='item-2'>
                <h1 >Welcome to Hangar 9</h1>
            </div>
        </div>
    )
}

export default Header;