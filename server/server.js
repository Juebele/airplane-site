const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
const connectDB = require('./config/db');
const BlogPost = require('./schemas/blogpost'); // Assuming the schema is in a file called blogPostModel.js

const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const newBlogPost = {
    title: 'Example Blog Post',
    body: 'This is the content of the blog post...',
};

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware
// });

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

// const startApolloServer = async (typeDefs, resolvers) => {
//     await server.start();
//     server.applyMiddleware({ app });

//     db.once('open', () => {
//         app.listen(PORT, () => {
//             console.log(`API server running on PORT ${PORT}!`);
//             console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//         });
//     });
// };

// Call the async function to start the server
// startApolloServer (typeDefs, resolvers);

connectDB().then(() => {
    // Start the server once the connection is established
    app.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}`);
    });
});