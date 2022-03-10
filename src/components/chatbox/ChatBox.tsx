import {Message} from "../../models";
import {Box} from "@mui/material";
import * as React from "react";
import MessageBox from "./MessageBox";
import MessagesList from "./MessagesList";
import {theme} from "../../styles/theme";

interface ChatBoxProps {
  messages: Message[]
  loadMore: (next: string) => void
  next: string
}

export default function ChatBox(props: ChatBoxProps) {

  return (
    <Box flexGrow={4}
         sx={{
           backgroundColor: 'white',
           display: 'flex',
           justifyContent: 'space-between',
           flexDirection: 'column',

         }}>
      <MessagesList {...props} />
      <MessageBox/>
    </Box>
  )
}
