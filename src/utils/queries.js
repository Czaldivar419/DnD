import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      password
    }
  }
`;

export const QUERY_USERS = gql`
query users {
  users {
    _id
    username
    password
  }
}
`;