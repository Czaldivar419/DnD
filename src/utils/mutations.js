import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $password: String!) {
  createUser( username: $username, password: $password ) {
    token
    user{
      _id
      username
    }
  }
}
`;

export const CREATE_CHARACTER = gql`
mutation CreateCharacter($input: CharacterInput!) {
  createCharacter(input: $input) {
    characterId
    characterName
    campaignId
    playerId
    class
    race
    stats {
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
    }
  }
}`