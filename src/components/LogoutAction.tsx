import LogoutIcon from "@mui/icons-material/Logout";
import * as React from "react";
import {useState} from "react";
import {Button, Dialog, DialogActions, DialogTitle, Typography} from "@mui/material";
import {API, graphqlOperation} from "aws-amplify";
import useAuth from "../hooks/useAuth";
import {deleteUserConnection} from "../graphql/mutations";

export default function LogoutAction() {
  const [open, setOpen] = useState(false)
  const auth = useAuth()

  function logout() {
    const id = auth.user?.connectionId
    auth.signOut(() => {
      API.graphql(graphqlOperation(deleteUserConnection, {input: {id}}))
    })
  }

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={() => setOpen(true)}>
        <Typography variant="body1" sx={{mr: 1}}>Logout</Typography>
        <LogoutIcon/>
      </Button>
      <Dialog open={open}>
        <DialogTitle>Do you want to logout?</DialogTitle>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={logout}>Sure</Button>
          <Button variant="outlined" color="primary" onClick={() => setOpen(false)}>No, stay in chat</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
