import React from 'react';
import '../App.css';
import logo from '../Assets/hangar-logo.png'

const Header = () => {
    return (
        <div class='container'>
            <div>
                <img id='image-1' src={logo} alt="Logo"/>
            </div>
            <div>
                <h1>Welcome to the Hangar</h1>
            </div>
            <div>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;