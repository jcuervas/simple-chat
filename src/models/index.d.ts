import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserConnectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Message {
  readonly id: string;
  readonly username: string;
  readonly userEmail: string;
  readonly message?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class UserConnection {
  readonly id: string;
  readonly fullName: string;
  readonly email: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserConnection, UserConnectionMetaData>);
  static copyOf(source: UserConnection, mutator: (draft: MutableModel<UserConnection, UserConnectionMetaData>) => MutableModel<UserConnection, UserConnectionMetaData> | void): UserConnection;
}