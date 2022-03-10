/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      username
      userEmail
      message
      type
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        userEmail
        message
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserConnection = /* GraphQL */ `
  query GetUserConnection($id: ID!) {
    getUserConnection(id: $id) {
      id
      fullName
      email
      createdAt
      updatedAt
    }
  }
`;
export const listUserConnections = /* GraphQL */ `
  query ListUserConnections(
    $filter: ModelUserConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullName
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listMessagesByDate = /* GraphQL */ `
  query ListMessagesByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessagesByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        userEmail
        message
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
