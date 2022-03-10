import {cognitoProvider, UserData} from "./cognito";
import React from "react";
import {API, graphqlOperation} from "aws-amplify";
import {createUserConnection, deleteUserConnection} from "../graphql/mutations";
import {GraphQLResult} from "@aws-amplify/api-graphql";
import {UserConnection} from "../models";

export interface AuthContextType {
  user: UserData|null;
  signIn: (email: string, password: string,
           callback: (user: UserData) => void,
           error: (message: string) => void) => void;
  signOut: (callback: VoidFunction) => void;
  signUp: (
    userData: UserData,
    callback: VoidFunction,
    error: (message: string) => void
  ) => void,
  confirmSignUp: (email: string, code: string, callback: VoidFunction, error: (message: string) => void) => void,
  setLoggedInUser: (user: UserData) => void
  isAuthenticated: () => Promise<UserData>
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({children}: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserData|null>(null);

  const getCurrentUser = async () => {
    return cognitoProvider.currentUser()
  }
  const setLoggedInUser = (loggedUser: UserData) => setUser(loggedUser)

  const signIn = (email: string, password: string, callback: (user: UserData) => void, error: (message: string) => void) => {
    return cognitoProvider.signIn(email, password, async (authUser: UserData) => {
      const userConnection = await (API.graphql(graphqlOperation(createUserConnection, {
        input: {
          fullName: `${authUser.name} ${authUser.middle_name}`,
          email: authUser.email
        }
      })) as Promise<GraphQLResult<{createUserConnection: UserConnection}>>)
      setUser({
        ...authUser,
        connectionId: userConnection.data?.createUserConnection.id || '',
      });
      callback(authUser);
    }, error);
  };

  const signOut = (callback: VoidFunction) => {
    return (API.graphql(
      graphqlOperation(deleteUserConnection, {input: {id: user?.connectionId}})
    ) as Promise<GraphQLResult>)
      .then(() => {
        cognitoProvider.signOut(() => {
          setUser(null);
          callback();
        });
      })
  };

  const signUp = (userData: UserData, callback: VoidFunction, error: (message: string) => void) => {
    return cognitoProvider.signUp(userData, callback, error)
  }

  const confirmSignUp = (email: string, code: string, callback: VoidFunction, error: (message: string) => void) => {
    return cognitoProvider.confirmSignUp(email, code, callback, error)
  }

  const value = {user, signIn, signOut, signUp, confirmSignUp, setLoggedInUser, isAuthenticated: getCurrentUser};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
