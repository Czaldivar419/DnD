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

export const QUERY_CAMPAIGNS = gql`
  query campaigns {
    campaigns {
      campaignId
      campaignName
    }
  }
`;

export const QUERY_CAMPAIGN = gql`
  query campaign($campaignId: String!) {
    campaign(campaignId: $campaignId) {
      campaignId
      campaignName
      dungeonMasterId
      players {
        userId
        username
      }
    }
  }
`;

