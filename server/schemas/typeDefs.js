const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
  }
  
  type Query {
    user(username: String!): User
    users:[User]
  }
`;

module.exports = typeDefs;