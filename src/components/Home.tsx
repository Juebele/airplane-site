import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home: React.FC = () => {
    return (
        <>
        <div id='homepage-bg' className='home-text'>
            <div id='home-el'>
                <h1>
                    Hangar 10
                </h1>
                <h6>
                    “Adventure is worthwhile in itself.” - Amelia Earhart
                </h6>
                <div className='container-3'>
                <Link to={'/Learning'}>
                    <button>
                        Learn more!
                    </button>
                </Link>
                <Link to={'/News'}>
                    <button>
                        Read up on aviation news here!
                    </button>
                </Link>
                <Link to={'/Signup'}>
                    <button>
                        Sign up here!
                    </button>
                </Link>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default Home;