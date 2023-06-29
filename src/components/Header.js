import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <div class='container'>
            <div>
                <img src='../Assets/hangar-logo.png'></img>
            </div>
            <div>
                <p>Welcome to my site!</p>
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