import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import format from "date-fns/format";
import * as React from "react";
import {Message} from "../../models";
import useAuth from "../../hooks/useAuth";
import InfiniteScroll from "react-infinite-scroll-component";

interface MessagesListProps {
  messages: Message[]
  loadMore: (next: string) => void
  next: string
}

export default function MessagesList(props: MessagesListProps) {
  const {messages, next} = props
  const auth = useAuth()

  function isConsecutive(message: Message, prev: Message) {
    return prev && (prev.userEmail === message.userEmail)
  }

  function isOwnMessage(message: Message) {
    return auth.user?.email === message.userEmail
  }

  function loadMore() {
    return props.loadMore(next)
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column-reverse', height: '100%', overflow: 'auto'}}>
      <InfiniteScroll
        next={loadMore}
        hasMore={!!next}
        inverse
        height={'calc(70vh - 56px)'}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        loader={<Typography variant="h5">Loading...</Typography>}
        dataLength={messages.length}>
        {messages.map((message, index) =>
          <ListItem key={index} sx={{display: 'flex', flexDirection: isOwnMessage(message) ? 'row-reverse' : 'row'}}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{flex: 'unset', mr: 1}}
              primary={isConsecutive(message, messages[index - 1])
                ? ''
                : message.username + ' - ' + format(new Date(message.createdAt as string), 'd MMM, hh:mm')}
              primaryTypographyProps={{color: '#777777', fontSize: '0.7rem'}}
              secondary={message.message}
              secondaryTypographyProps={{color: '#444444', textAlign: isOwnMessage(message) ? 'right' : 'left'}}
            />
          </ListItem>
        )}
      </InfiniteScroll>
    </Box>
  )
}
