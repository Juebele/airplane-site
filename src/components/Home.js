import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
    return (
        <div id='homepage-bg' class='home-text'>
            <div id='home-el'>
                <h1>
                    Hangar 10
                </h1>
                <h6>
                    “Adventure is worthwhile in itself.” - Amelia Earhart
                </h6>
                <Link to={'/Learning'}>
                    <button>
                        Learn more!
                    </button>
                </Link>
                
            </div>
        </div>
    )
}

export default Home;