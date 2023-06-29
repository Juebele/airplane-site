import React, { useState, useEffect } from 'react';
import '../App.css';
import FourForces from './sub-components/four-forces'
import TestSubComponent from './sub-components/test-sub-component';


export default function Main() {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div class='container-2'>
            <div>
                <button onClick={() => handleTabClick(0)}>Button 1</button>
                <button onClick={() => handleTabClick(1)}>Button 2</button>
                <button>Button 3</button>
                <button>Button 4</button>
                <button>Button 5</button>
            </div>
            <div>
                <div>
                    <div>
                        {activeTab === 0 && <FourForces />}
                        {activeTab === 1 && <TestSubComponent />}
                    </div>
                </div>
            </div>
        </div>
    )
}
