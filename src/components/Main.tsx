// Necessary Imports
import React, { useState } from 'react';
import '../App.css';
import FourForces from './sub-components/four-forces'
import Aerodynamics from './sub-components/aerodynamics';
import StallsSpins from './sub-components/stalls-spins';
import Airspeed from './sub-components/airspeed';
// import TestSubComponent from './sub-components/test-sub-component';


export default function Main() {

    // Logic to change tabs when you click on the buttons
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='container-2'>
            <div>
                {/* These buttons change the active tab */}
                <button className='learning-button' onClick={() => handleTabClick(0)}>Aerodynamics</button>
                <button className='learning-button' onClick={() => handleTabClick(1)}>Forces of Flight</button>
                <button className='learning-button' onClick={() => handleTabClick(2)}>AoA, Stalls, and Spins</button>
                <button className='learning-button' onClick={() => handleTabClick(3)}>Airspeed</button>
            </div>
            <div>
                <div>
                    <div>
                        {/* The active tab correlates to one of these tabs */}
                        {activeTab === 0 && <Aerodynamics />}
                        {activeTab === 1 && <FourForces />}
                        {activeTab === 2 && <StallsSpins />}
                        {activeTab === 3 && <Airspeed />}
                    </div>
                </div>
            </div>
        </div>
    )
}