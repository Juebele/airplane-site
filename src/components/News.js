import React from "react";
import '../App.css';
import Header from './Header';
import Picture from '../Assets/airshow.jpg'

const News = () => {
    return (
        <div>
            <Header />
            <h1>The latest news is right here!</h1>
            <div class='article'>
                <h2>Russia's MAKS Air Show Has Been Canceled</h2>
                <h4>This is the first time the event has ever been canceled</h4>
                <img src={Picture}></img>
                <p>In a year filled with the anticipated return of numerous conventions and airshows, Russia's flagship biennial airshow - the 16th International Air and Space Salon (MAKS) 2023, was initially planned to be held for two days from July 23rd this year. However, the event's organizers have confirmed that it will be canceled this year.</p>
            </div>
        </div>
    )
}

export default News;