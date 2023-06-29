import React from 'react';
import '../../App.css';
import aoa from '../../Assets/angle-of-attack.png';
import stalls from '../../Assets/stalls.png';

const StallsSpins = () => {
    return (
        <div>
            <img class='image' src={aoa} />
            <div>
                <h1>Angle of Attack</h1>
                <p>It’s time to learn a new term: Angle of Attack. This is the angle that the wing meets the oncoming air. When we first talked about how wings generate lift, we imagined the air coming straight on, but there’s no rule that that has to be the case. The way we measure the angle of attack is by drawing a line from the leading edge of the wing to the trailing edge; we’ll call this the chord line. We’ll compare this chord line to the oncoming air and the angle between the two lines is the angle of attack, which we can also write as “a" or “alpha”. Think of the angle of attack like the size of the “bite” that the wing is taking out of the air. When the angle of attack increases, the wing generates more lift because it’s taking a bigger bite out of the air. The wing doesn’t need to be perfectly aligned with the oncoming air because the air will stick to the wing and follow to curve. This is called the Coandă effect but it has its limits.</p>
            </div>
            <img class='image' src={stalls} />
            <div>
                <h1>Stalls</h1>
                <p>The air will try to stick to the wing, but after a certain point the turn will be too sharp for the air to follow. This angle where the air can no longer follow the wing is called the critical angle of attack and past this point, the air over the wing becomes a mass of turbulent air instead of the smooth airflow we normally want. In this state, the wing will generate drag but basically no lift; we say that the wing is “stalled” when this happens. The only way to bring the wing out of a stall is by reducing the angle of attack below the critical angle of attack so that the normal airflow can be restored. The angle of attack is normally reduced by lowering the nose of the plane, but this means that we’ll have to give up altitude. For this reason, stalls at low altitude can be dangerous because we won’t have enough altitude to break the stall.</p>
                <h1>Spins</h1>
                <p>Another hazard closely related to stalls is the spin. A spin occurs when a plane is yawing left or right when approaching a stall. This means that one wing is traveling faster than the other and the slower wing will have a higher angle of attack. Because of this imbalance in the angle of attack, the inner wing, which has a higher angle of attack, will stall before the outer wing. This will cause the plane to roll towards the inner wing at the same time that it begins to stall. Recovering from a spin is similar to recovering from a stall, but it’s more involved and requires more altitude.</p>
            </div>

        </div>
    )
}

export default StallsSpins;