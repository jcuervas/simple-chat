import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {Alert, Card, Snackbar} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";

export default function ConfirmSignUp() {
  const auth = useAuth()
  const navigate = useNavigate()
  const [snackBar, setSnackBar] = useState(false)
  const [error, setError] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    auth.confirmSignUp(data.get('email') as string, data.get('code') as string,
       () => {
      navigate('/')
    }, error => {
      setSnackBar(true)
      setError(error)
    })
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
        <LockOutlinedIcon/>
      </Avatar>
      <Typography component="h1" variant="h5">
        Confirmation code
      </Typography>
      <Card sx={{background: 'white', p: 4, mt: 1}}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="code"
                label="Code"
                type="text"
                id="code"
                autoComplete="code"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
          >
            Sign Up
          </Button>
        </Box>
      </Card>
      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        open={snackBar}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </Box>
  );
}
