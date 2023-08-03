import React from 'react';
import '../../App.css';
const forces = '../../Assets/four-forces.png'


const FourForces = () => {
    return (
        <div>
            <img className='image' src={forces} />
            <div className='content'>
                <h1>Four Forces of Flight</h1>
                <p>There are four main forces that act on an airplane in flight, and you’ve probably heard of them already.</p>
                <p>These four forces are lift, weight, thrust, and drag. These forces are like the four directions on a compass: each one has its polar opposite on the other side. Lift is balanced out by weight, and thrust is balanced out by drag.</p>
                <p>The laws of physics make it so that these forces will always try to equal each other. That doesn’t mean that they will equal each other however, and we can use this basic principle to make a plane do what we want it to do. For example, since thrust and drag want to be equal to each other, if we want to fly faster, we can add more thrust and the plane will accelerate. That sounds obvious but what will cause the plane to stop accelerating? Why does the plane have a top speed? The answer to this is drag. As the plane accelerates due to its thrust, drag from the surrounding air will try and hold it back. As long as thrust is greater than drag, the plane will keep going faster. Eventually, the drag will equal thrust and this is when the plane will finally settle at given speed.</p>
                <p>All of the forces are related in some way though, even if they aren’t opposites. Weight, for example, impacts drag and therefore speed. This is because if weight is increased, then lift must be increased to balance it out. Lift isn’t free though, and increased lift means increased drag and therefore reduced speed.</p>
            </div>
        </div>
    )
}

export default FourForces;