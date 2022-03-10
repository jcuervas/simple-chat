import {StyledInputBar, StyledInputBase} from "../shared/styled";
import SendIcon from "@mui/icons-material/Send";
import {Box, IconButton, InputAdornment} from "@mui/material";
import * as React from "react";
import {KeyboardEvent, useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {createMessage} from "../../graphql/mutations";
import useAuth from "../../hooks/useAuth";

export default function MessageBox() {
  const [message, setMessage] = useState('')
  const auth = useAuth()

  async function sendMessage() {
    await API.graphql(graphqlOperation(createMessage, {
      input: {
        type: 'Message',
        message,
        username: `${auth.user?.name} ${auth.user?.middle_name}`,
        userEmail: auth.user?.email
      }
    }))
    setMessage('')
  }
  function sendOnEnter(ev: KeyboardEvent<HTMLDivElement>) {
    if (ev.code === 'Enter') {
      return sendMessage()
    }
  }

  return (
    <Box sx={{borderTop: '1px solid rgba(0,0,0,0.15)', height: '40px', p: 1}}>
      <StyledInputBar>
        <StyledInputBase
          error={message.length > 160}
          placeholder="Write your message"
          value={message}
          required
          onKeyPress={sendOnEnter}
          onChange={ev => setMessage(ev.target.value)}
          endAdornment={<InputAdornment position="end">
              <IconButton onClick={sendMessage} edge="end">
                <SendIcon color="action"/>
              </IconButton>
            </InputAdornment>}
        />
      </StyledInputBar>
    </Box>
  )
}
