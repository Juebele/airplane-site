import React from 'react';
import '../../App.css';
import airspeed from '../../Assets/airspeed.png'

const Airspeed = () => {
    return (
        <div>
            <img class='image' src={airspeed} />
            <div>
                <h1>Airspeed</h1>
                <p>Now, the angle of attack is just one part of the equation we need if we want to know how much lift we’re making. The other important thing to consider is airspeed. Airspeed is what it sounds like: it’s just how quickly the air is flowing over the wing. Since the wing generates lift from the air passing around it, the more air is flowing over the wing, the more lift the wing will generate. If we combine the airspeed and the angle of attack, we can get the “total” lift. Think of lift like the answer to a multiplication problem. If we’re trying to make two numbers multiply to equal 16, we have a lot of options. Remember this, it’ll be important when we talk about landing.</p>
                <ul>
                    Multiplication Example
                    <li>4 x 4 = 16</li>
                    <li>2 x 8 = 16</li>
                    <li>8 x 2 = 16</li>
                    <li>1 x 1 6 =16</li>
                    <li>16 x 1 = 16</li>
                </ul>
            </div>
        </div>
    )
}

export default Airspeed