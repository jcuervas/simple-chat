// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, UserConnection } = initSchema(schema);

export {
  Message,
  UserConnection
};