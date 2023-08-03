import React from 'react';
import '../App.css';
import Header from './Header'
const Headshot = '../../Assets/james-headshot.jpg'

const About = () => {
    return (
        <div>
            <Header />
            <div>
                
                <h1>We Love Airplanes!</h1>
                <div className='container-1'>
                <img id='headshot' src={Headshot}></img>
                <p>Hangar 10 was started by James, a software engineer and aviation geek who was looking for a way to practice his web development skills and set a challenge for himself to build a website.</p>
                </div>
            </div>
        </div>
    )
}

export default About;