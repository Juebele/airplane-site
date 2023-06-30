import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
    return (
        <div id='homepage-bg'>
            <div id='home-el'>
                <h1 class='home-text'>
                    Welcome to the Hangar!
                </h1>
                <div>
                    <h2 class='home-text'>
                        Learn about Airplanes!
                    </h2>
                </div>
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