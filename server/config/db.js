// db.js
const mongoose = require('mongoose');
const BlogPost = require('../models/blogPostModel');

const dbUrl = 'mongodb://localhost:27017/airplaneDB';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = { connectToDatabase };
