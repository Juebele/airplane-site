const { User, Post } = require('../../server/models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent: any, { username }: {username: string}) => {
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

module.exports = resolvers;