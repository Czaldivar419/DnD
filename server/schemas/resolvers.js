// Import necessary dependencies and models
const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Character, Campaign } = require('../models');
const { signToken } = require('../utils/auth');

// Define the resolver functions for Query and Mutation
const resolvers = {
  Query: {
    // Query to get a single user by their username
    user: async (parent, { username }) => {
      // Find a user with the given username from the User model
      return User.findOne({ username });
    },
    // Query to get all users
    users: async () => {
      // Find all users from the User model
      return User.find({});
    },
    // Query to get all campaigns with their dungeon master and players populated
    campaigns: async () => {
      // Find all campaigns from the Campaign model and populate their dungeon master and player IDs
      return Campaign.find({})
        .populate('dungeonMasterId')
        .populate('playerIds');
    },
  },
  Mutation: {
    // Mutation to create a character
    createCharacter: async (parent, { input }, { req }) => {
      try {
        // Get the user ID from session storage
        const userId = req.session.userId;
        // If the user is not logged in, throw an AuthenticationError
        if (!userId) {
          throw new AuthenticationError('You need to be logged in to create a character');
        }
    
        // Add the user ID to the character input
        input.playerId = userId;
    
        // Create the character in the database
        const character = await Character.create(input);
    
        // Add the character ID to the user's list of characters
        await User.findByIdAndUpdate(userId, { $push: { characters: character._id } });

        // Return the created character
        return character;
      } catch (err) {
        // If an error occurs, log the error and throw a UserInputError
        console.log(err);
        throw new UserInputError('Failed to create character', { errors: err });
      }
    },
    // Mutation to create a user
    createUser: async (parent, { username, password }) => {
      try {
        // Create the user in the database
        const user = await User.create({ username, password });

        // Generate a token for the user
        const token = signToken(user);

        // Return an object containing the token and the created user
        return {
          token,
          user,
        };
      } catch (err) {
        // If an error occurs, log the error and throw a UserInputError
        console.log(err);
        throw new UserInputError('Failed to create user', { errors: err });
      }
    },
  },
};

// Export the resolvers object
module.exports = resolvers;