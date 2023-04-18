const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return User.findOne({ username });
          },
          users: async () => {
            return User.find({});
          },
    }
  };
  
  module.exports = resolvers;
  