import React, { useState, useEffect } from 'react';
import '../App.css';
import FourForces from './sub-components/four-forces'
import Aerodynamics from './sub-components/aerodynamics';
import StallsSpins from './sub-components/stalls-spins';
import Airspeed from './sub-components/airspeed';
import TestSubComponent from './sub-components/test-sub-component';


export default function Main() {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div class='container-2'>
            <div>
                <button onClick={() => handleTabClick(0)}>Aerodynamics</button>
                <button onClick={() => handleTabClick(1)}>Forces of Flight</button>
                <button onClick={() => handleTabClick(2)}>AoA, Stalls, and Spins</button>
                <button onClick={() => handleTabClick(3)}>Airspeed</button>
                <button>Button 4</button>
                <button>Button 5</button>
            </div>
            <div>
                <div>
                    <div>
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
