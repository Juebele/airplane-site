import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../Assets/hangar-icon-100.png'
import LearningHeader from './sub-components/learning-header';

const Header = () => {
    return (
        <div className='container-1 header'>
            <div id='item-1'>
                <button className='blank-button'>
                    <Link to={'/'}>
                        <img id='image-1' src={logo} alt="Logo" />
                    </Link>
                </button>
            </div>
            <div id='item-2'>
                <LearningHeader />
            </div>
        </div>
    )
}

export default Header;