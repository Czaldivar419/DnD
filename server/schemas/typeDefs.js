const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
  }

  input CharacterInput {
    characterName: String!
    campaignId: String!
    playerId: String!
    class: String!
    race: String!
    stats: StatsInput!
  }

  type Stats {
    strength: Int!
    dexterity: Int!
    constitution: Int!
    intelligence: Int!
    wisdom: Int!
    charisma: Int!
  }

  input StatsInput {
    strength: Int!
    dexterity: Int!
    constitution: Int!
    intelligence: Int!
    wisdom: Int!
    charisma: Int!
  }

  type Character {
    characterId: ID!
    characterName: String!
    campaignId: String!
    playerId: String!
    class: String!
    race: String!
    stats: Stats!
  }

  type Campaign {
    _id: ID!
    campaignId: String!
    campaignName: String!
    dungeonMasterId: String!
    playerIds: [User]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    users: [User]
    campaigns: [Campaign]
    campaign(campaignId: String!): Campaign
  }

  type Mutation {
    createCharacter(input: CharacterInput!): Character
    createUser(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;