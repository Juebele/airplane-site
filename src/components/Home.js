import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
    return (
        <div id='homepage-bg' class='home-text'>
            <div id='home-el'>
                <h1>
                    Welcome to the Hangar
                </h1>
                    <h6>
                    “Adventure is worthwhile in itself.” - Amelia Earhart
                    </h6>
                <button>
                    <Link to ={'/Learning'}>
                        Learn more!
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Home;