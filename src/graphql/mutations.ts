/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createUserConnection = /* GraphQL */ `
  mutation CreateUserConnection(
    $input: CreateUserConnectionInput!
    $condition: ModelUserConnectionConditionInput
  ) {
    createUserConnection(input: $input, condition: $condition) {
      id
      fullName
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateUserConnection = /* GraphQL */ `
  mutation UpdateUserConnection(
    $input: UpdateUserConnectionInput!
    $condition: ModelUserConnectionConditionInput
  ) {
    updateUserConnection(input: $input, condition: $condition) {
      id
      fullName
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserConnection = /* GraphQL */ `
  mutation DeleteUserConnection(
    $input: DeleteUserConnectionInput!
    $condition: ModelUserConnectionConditionInput
  ) {
    deleteUserConnection(input: $input, condition: $condition) {
      id
      fullName
      email
      createdAt
      updatedAt
    }
  }
`;
