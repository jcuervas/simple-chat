import * as React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Message, UserConnection} from "../models";
import {API, graphqlOperation} from "aws-amplify";
import {listMessagesByDate, listUserConnections} from "../graphql/queries";
import {GraphQLResult} from "@aws-amplify/api-graphql";
import ChatBox from "../components/chatbox/ChatBox";
import {onCreateMessage, onCreateUserConnection, onDeleteUserConnection} from "../graphql/subscriptions";
import Observable from "zen-observable-ts";
import {ZenObservable} from "zen-observable-ts/lib/types";
import Participants from "../components/Participants";
import LogoutAction from "../components/LogoutAction";
import {UserData} from "../providers/cognito";
import {ModelSortDirection} from "../API";
import {AuthContext} from "../providers/AuthProvider";
import {theme} from "../styles/theme";


interface HomeState {
  messages: Message[],
  next: string,
  users: UserConnection[]
  msgSubscription?: ZenObservable.Subscription
  usersCreateSubscription?: ZenObservable.Subscription
  usersDeleteSubscription?: ZenObservable.Subscription
  exitDialog: boolean
  limit: number
}


class Home extends React.Component<any, HomeState> {

  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
      users: [],
      exitDialog: false,
      next: '',
      limit: 20
    }
    this.getMessages = this.getMessages.bind(this)
    this.pushUserConnection = this.pushUserConnection.bind(this)
    this.removeUserConnection = this.removeUserConnection.bind(this)
  }

  async componentDidMount() {
    await this.getMessages()
    const users = await (API.graphql<UserData[]>(
      graphqlOperation(listUserConnections)
    ) as Promise<GraphQLResult<{ listUserConnections: { items: UserConnection[] } }>>)

    this.setState({
      users: users.data?.listUserConnections.items as UserConnection[] || [],
      msgSubscription: (API.graphql(graphqlOperation(onCreateMessage)) as Observable<Message>)
        .subscribe(() => {
          this.getMessages()
        }),
      usersCreateSubscription: (API.graphql(graphqlOperation(onCreateUserConnection)) as
        Observable<{ value: { data: { onCreateUserConnection: UserConnection } } }>)
        .subscribe(observer => {
          this.pushUserConnection(observer.value.data.onCreateUserConnection)
        }),
      usersDeleteSubscription: (API.graphql(graphqlOperation(onDeleteUserConnection)) as
        Observable<{ value: { data: { onDeleteUserConnection: UserConnection } } }>)
        .subscribe(observer => {
          this.removeUserConnection(observer.value.data.onDeleteUserConnection)
        })
    })

    window.addEventListener("beforeunload", (e) => {
      e.returnValue = ''
      this.context.signOut(() => null)
    });
  }

  componentWillUnmount() {
    this.state.msgSubscription?.unsubscribe()
    this.state.usersCreateSubscription?.unsubscribe()
    this.state.usersDeleteSubscription?.unsubscribe()
  }

  async getMessages(next?: string) {
    const result = await (API.graphql<Message[]>(
      graphqlOperation(listMessagesByDate, {
        type: 'Message',
        limit: this.state.limit,
        sortDirection: ModelSortDirection.DESC,
        ...next ? {next} : {}
      })
    ) as Promise<GraphQLResult<{ listMessagesByDate: { items: Message[], nextToken: string } }>>)
    const limit = this.state.limit + (!!result.data?.listMessagesByDate.nextToken ? 10 : 0)
    this.setState({
      messages: result.data?.listMessagesByDate.items as Message[] || [],
      limit,
      next: result.data?.listMessagesByDate.nextToken || ''
    })
  }

  pushUserConnection(userConnection: UserConnection) {
    this.setState({
      users: [...this.state.users, userConnection]
    })
  }

  removeUserConnection(userConnection: UserConnection) {
    const index = this.state.users.findIndex(u => u.id === userConnection.id)
    if (index === -1) return
    this.setState({
      users: this.state.users.splice(index, 1)
    })
  }

  render() {
    return <Container maxWidth="md" sx={{position: 'relative'}}>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Typography flexGrow={1} variant="h1" sx={{pb: 2, textAlign: 'center'}}>Welcome to chatroom</Typography>
        <LogoutAction/>
      </Box>

      <Box sx={{
        display: 'flex', width: '100%', height: '70vh',
        boxShadow: '0 0 10px rgba(0,0,0,0.15)',
        borderRadius: theme.spacing(1),
        overflow: 'hidden'
      }}>
        <Participants users={this.state.users}/>
        <ChatBox messages={this.state.messages} next={this.state.next} loadMore={this.getMessages}/>
      </Box>
    </Container>
  }

}

Home.contextType = AuthContext

export default Home
