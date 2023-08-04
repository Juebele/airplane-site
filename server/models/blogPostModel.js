// blogPostModel.js
const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: String,
  body: String,
  // Other properties...
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
