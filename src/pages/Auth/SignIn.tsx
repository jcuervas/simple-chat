import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {Alert, Card, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {Visibility, VisibilityOff} from "@mui/icons-material";

export default function SignIn() {
  const auth = useAuth()
  const navigate = useNavigate()
  const [snackBar, setSnackBar] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    auth.signIn(data.get('email') as string, data.get('password') as string, async (user) => {
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
      }}>
      <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
        <LockOutlinedIcon/>
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Card sx={{background: 'white', p: 4, mt: 1}}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <FormControl fullWidth  sx={{mb: 2}}>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <OutlinedInput
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </FormControl>

          <FormControl fullWidth >
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              required
              fullWidth
              name="password"
              label="Password"
              color="primary"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              endAdornment={<InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
            />
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}>
            Sign In
          </Button>
          <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Link href="/confirm" variant="body2">
              Have a confirmation code? enter here
            </Link>
            <Link href="/signup" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Box>
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
