const { User, Post } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, {username}) => {
            return await User.findOne({username}).populate('posts')
        },
        users: async () => {
            return await User.find().populate('posts');
        },
    },

    // Mutation: {
    //     login: async (parent, {username, password}) => {
    //         const user = await
    //     }
    // }
}