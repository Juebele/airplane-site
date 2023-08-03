import React from 'react';
import '../App.css';
const hero = '../Assets/hero-image.jpeg'

const Hero = () => {
    return (
        <div>
            <img id='hero' src={hero}/>
        </div>
    )
}

export default Hero;