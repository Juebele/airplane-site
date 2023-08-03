import React from 'react';
import '../../App.css';
const testImage = '../../Assets/test-image.jpeg';

const TestSubComponent = () => {
    return (
        <div className='container-1'>
            <div className='container-2'>
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