import {Outlet, useNavigate} from "react-router-dom";
import styles from '../styles/Auth.module.scss'
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import {Container} from "@mui/material";
import {useEffect} from "react";
import useAuth from "../hooks/useAuth";
import {API, graphqlOperation} from "aws-amplify";
import {createUserConnection} from "../graphql/mutations";
import {GraphQLResult} from "@aws-amplify/api-graphql";
import {UserConnection} from "../models";


export default function AuthLayout() {
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    auth.isAuthenticated().then((user) => {
      if (user) {
        (API.graphql(graphqlOperation(createUserConnection, {
          input: {
            fullName: `${user.name} ${user.middle_name}`,
            email: user.email
          }
        })) as Promise<GraphQLResult<{createUserConnection: UserConnection}>>)
          .then(userConnection => {
            auth.setLoggedInUser({
              ...user,
              connectionId: userConnection.data?.createUserConnection.id || '',
            });
            navigate('/');
          })
      }
    })
  }, [])

  return (
    <Container component="main" className={styles.main} maxWidth="sm">
      <CssBaseline/>
      <Outlet/>
    </Container>
  )
}
