import React from 'react';
import '../../App.css';
import testImage from '../../Assets/test-image.jpeg';

const TestSubComponent = () => {
    return (
        <div class='container-1'>
            <div class='container-2'>
                <h1>This is a test sub-component</h1>
                <p>This is test copy</p>
            </div>
            <div>
                <img src={testImage}/>
            </div>
        </div>
    )
}

export default TestSubComponent;