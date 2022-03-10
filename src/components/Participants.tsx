import {UserConnection} from "../models";
import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {theme} from "../styles/theme";
import PersonIcon from "@mui/icons-material/Person";
import * as React from "react";

interface ParticipantsProps {
  users: UserConnection[]
}
export default function Participants(props: ParticipantsProps) {
  const {users} = props
  return (
    <Box flexGrow={1} sx={{backgroundColor: theme.palette.secondary.light}}>
      <Typography variant="h5" sx={{width: '100%', borderBottom: '1px solid #444', textAlign: 'center', p: 1}}>
        Participants
      </Typography>
      <List>
        {users.map((user, i) => {
          return <ListItem key={i}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={user.fullName}
            />
          </ListItem>
        })}
      </List>
    </Box>
  )
}
