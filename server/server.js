const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3300;
const app = express();
const connectDB = require('./config/db');
const BlogPost = require('./schemas/blogpost'); // Assuming the schema is in a file called blogPostModel.js

const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const newBlogPost = {
    title: 'Example Blog Post',
    body: 'This is the content of the blog post...',
};

BlogPost.create(newBlogPost)
    .then((createdPost) => {
        console.log('New blog post created:', createdPost);
    })
    .catch((error) => {
        console.error('Error creating blog post:', error);
    });

BlogPost.find({})
    .then((blogPosts) => {
        console.log('All blog posts:', blogPosts);
    })
    .catch((error) => {
        console.error('Error fetching blog posts:', error);
    });

app.use(express.urlencoded({ extended: false }));

//middleware for parsing json data
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(_dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../client/build/index.html'));
});

// Call the async function to start the server
// startApolloServer (typeDefs, resolvers);

async function startServer() {
    try {
      await connectDB();
      app.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}`);
      });
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    }
  }
  
  startServer();