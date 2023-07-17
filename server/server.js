const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
const connectDB = require('./config/db');

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware
// });

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