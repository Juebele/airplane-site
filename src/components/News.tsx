import React from "react";
import '../App.css';
import Header from './Header';
const Picture = '../Assets/airshow.jpg'
const BlogPost = require('../schemas/blogpost'); // Assuming the schema is in a file called blogPostModel.js

const createPost = () => {
    
    const newBlogPost = {
        title: 'News page test',
        body: 'This is a test on the news page...',
    };
    
    BlogPost.create(newBlogPost)
    .then((createdPost: any) => {
        console.log('New blog post created:', createdPost);
    })
    .catch((error: any) => {
        console.error('Error creating blog post:', error);
    });}

const News = () => {
    return (
        <div>
            {/* This is a hard-coded mockup of what a news article would look like */}
            <Header />
            <h1>The latest news is right here!</h1>
            <div className='article'>
                <h2>Russia's MAKS Air Show Has Been Canceled</h2>
                <h4>This is the first time the event has ever been canceled</h4>
                <img src={Picture}></img>
                <p>In a year filled with the anticipated return of numerous conventions and airshows, Russia's flagship biennial airshow - the 16th International Air and Space Salon (MAKS) 2023, was initially planned to be held for two days from July 23rd this year. However, the event's organizers have confirmed that it will be canceled this year.</p>
                <button onClick={createPost}>Create a new blog post!</button>
            </div>
        </div>
    )
}

export default News;