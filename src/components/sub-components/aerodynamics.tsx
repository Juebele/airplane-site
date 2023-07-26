import React from 'react';
import '../../App.css';
import lift from '../../Assets/airfoil.png'

const Aerodynamics = () => {
    return (
        <div>
            <img className='image' src={lift} />
            <div className='content'>
                <h1>Aerodynamics</h1>
                <p>Planes may seem like magic, soaring through the sky over our heads, defying gravity. Really though, as impressive as aircraft are, they are very simple in principle. To understand how planes fly, we first need to understand some things about the air around and above us. What seems to us to be empty space is really a fluid made up of the individual molecules of many different gases such as oxygen, nitrogen, and carbon dioxide, among others. Just as a swimmer can push against water to swim forward, backward, up, or down, an aircraft can push against the air to generate lift or thrust.</p>
                <h2>Bernoulli Principle</h2>
                <p>The secret to generating lift is something called an airfoil. This is a special shape with a curved upper surface and a flat bottom surface. When air meets the front of the airfoil, it must either go above it or below it. Because of the airfoil’s curved upper surface, the air that flows over the top moves faster than the air below the wing. This creates a pocket of low pressure on top of the wing and the wing will be pulled upwards as if there was a vacuum pulling on it. This is known as the Bernoulli principle.</p>
                <h2>Newtonian Principle</h2>
                <p>The other explanation of how wings generate lift comes from the physics discovered by Isaac Newton, so we call this the “Newtonian” explanation. Newton’s second law of motion states that every action has an equal and opposite reaction, or in other words, when you push against something, it pushes back with the same force. It’s easy to understand how a wing can use this law of motion to lift itself. The wing pushes oncoming air down and because there’s an equal and opposite reaction, the air also pushes the wing up.</p>
            </div>
        </div>
    )
}

export default Aerodynamics;