const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const port = process.env.PORT || 3300;
const app = express();
const connectDB = require('./config/db');
const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'gooseDB';

client.connect()
    .then(() => {
        console.log('Connected successfully to MongoDB');
        db = client.db(dbName);
        app.listen(port, () => {
            console.log(`Goose app listening at http://localhost:${port}`);
        });
    });

    app.use(express.json());

    app.post('/create', (req, res) => {
        db.collection('gooseDB').insertOne(
            { username: req.body.username, password: req.body.password }
        )
            .then(results => res.json(results))
            .catch(err => {
                if (err) throw err;
            });
    });

    app.get('/read', (req, res) => {
        db.collection('gooseDB')
            .find()
            .toArray()
            .then(results => res.json(results))
            .catch(err => {
                if (err) throw err;
            });
    });

// const newBlogPost = {
//     title: 'Example Blog Post',
//     body: 'This is the content of the blog post...',
// };

// BlogPost.create(newBlogPost)
//     .then((createdPost) => {
//         console.log('New blog post created:', createdPost);
//     })
//     .catch((error) => {
//         console.error('Error creating blog post:', error);
//     });

// BlogPost.find({})
//     .then((blogPosts) => {
//         console.log('All blog posts:', blogPosts);
//     })
//     .catch((error) => {
//         console.error('Error fetching blog posts:', error);
//     });

// app.use(express.urlencoded({ extended: false }));

// //middleware for parsing json data
// app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(_dirname, '../client/build')));
// }

// app.get('/', (req, res) => {
//     res.sendFile(path.join(_dirname, '../client/build/index.html'));
// });

// // Call the async function to start the server
// // startApolloServer (typeDefs, resolvers);

// async function startServer() {
//     try {
//       await connectDB();
//       app.listen(PORT, () => {
//         console.log(`Server listening on PORT ${PORT}`);
//       });
//     } catch (error) {
//       console.error('Error connecting to MongoDB:', error);
//       process.exit(1);
//     }
//   }
  
//   startServer();