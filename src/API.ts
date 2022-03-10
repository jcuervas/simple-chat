/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageInput = {
  id?: string | null,
  username: string,
  userEmail: string,
  message: string,
  type: string,
  createdAt?: string | null,
};

export type ModelMessageConditionInput = {
  username?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  message?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  username: string,
  userEmail: string,
  message: string,
  type: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMessageInput = {
  id: string,
  username?: string | null,
  userEmail?: string | null,
  message?: string | null,
  type?: string | null,
  createdAt?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateUserConnectionInput = {
  id?: string | null,
  fullName: string,
  email: string,
};

export type ModelUserConnectionConditionInput = {
  fullName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConnectionConditionInput | null > | null,
  or?: Array< ModelUserConnectionConditionInput | null > | null,
  not?: ModelUserConnectionConditionInput | null,
};

export type UserConnection = {
  __typename: "UserConnection",
  id: string,
  fullName: string,
  email: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserConnectionInput = {
  id: string,
  fullName?: string | null,
  email?: string | null,
};

export type DeleteUserConnectionInput = {
  id: string,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  message?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelUserConnectionFilterInput = {
  id?: ModelIDInput | null,
  fullName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConnectionFilterInput | null > | null,
  or?: Array< ModelUserConnectionFilterInput | null > | null,
  not?: ModelUserConnectionFilterInput | null,
};

export type ModelUserConnectionConnection = {
  __typename: "ModelUserConnectionConnection",
  items:  Array<UserConnection | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    username: string,
    userEmail: string,
    message: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    username: string,
    userEmail: string,
    message: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    username: string,
    userEmail: string,
    message: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserConnectionMutationVariables = {
  input: CreateUserConnectionInput,
  condition?: ModelUserConnectionConditionInput | null,
};

export type CreateUserConnectionMutation = {
  createUserConnection?:  {
    __typename: "UserConnection",
    id: string,
    fullName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserConnectionMutationVariables = {
  input: UpdateUserConnectionInput,
  condition?: ModelUserConnectionConditionInput | null,
};

export type UpdateUserConnectionMutation = {
  updateUserConnection?:  {
    __typename: "UserConnection",
    id: string,
    fullName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserConnectionMutationVariables = {
  input: DeleteUserConnectionInput,
  condition?: ModelUserConnectionConditionInput | null,
};

export type DeleteUserConnectionMutation = {
  deleteUserConnection?:  {
    __typename: "UserConnection",
    id: string,
    fullName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    username: string,
    userEmail: string,
    message: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      username: string,
      userEmail: string,
      message: string,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserConnectionQueryVariables = {
  id: string,
};

export type GetUserConnectionQuery = {
  getUserConnection?:  {
    __typename: "UserConnection",
    id: string,
    fullName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserConnectionsQueryVariables = {
  filter?: ModelUserConnectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserConnectionsQuery = {
  listUserConnections?:  {
    __typename: "ModelUserConnectionConnection",
    items:  Array< {
      __typename: "UserConnection",
      id: string,
      fullName: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesByDateQueryVariables = {
  type: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesByDateQuery = {
  listMessagesByDate?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      username: string,
      userEmail: string,
      message: string,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    username: string,
    userEmail: string,
    message: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    username: string,
    userEmail: string,
    message: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    username: string,
    userEmail: string,
    message: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserConnectionSubscription = {
  onCreateUserConnection?:  {
    __typename: "UserConnection",
    id: string,
    fullName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserConnectionSubscription = {
  onUpdateUserConnection?:  {
    __typename: "UserConnection",
    id: string,
    fullName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserConnectionSubscription = {
  onDeleteUserConnection?:  {
    __typename: "UserConnection",
    id: string,
    fullName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
