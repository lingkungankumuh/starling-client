import React from 'react';
import { Copyright, NoteAddOutlined } from '@mui/icons-material';
import {
  Link,
  Grid,
  CssBaseline,
  Paper,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../configs/api';

interface Register {
  name: string;
  email: string;
  password: string;
}

export const Register: React.FC = () => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const registerMutation = useMutation({
    mutationFn: (payload: Register) => axiosInstance.post('auth/signup', payload),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleOnChange = <T extends string | number | boolean>(
    value: T,
    dispatch: React.Dispatch<React.SetStateAction<T>>,
  ): void => {
    dispatch(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log('masuk')
    e.preventDefault();
    const payload: Register = {
      name,
      email,
      password,
    };
    registerMutation.mutate(payload);
  };

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <NoteAddOutlined />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Register
          </Typography>
          <Box component='form' noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='name'
              label='Name'
              name='name'
              autoComplete='name'
              autoFocus
              onChange={(e) => {
                handleOnChange(e.currentTarget.value, setName);
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => {
                handleOnChange(e.currentTarget.value, setEmail);
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(e) => {
                handleOnChange(e.currentTarget.value, setPassword);
              }}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              onClick={onSubmit}
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
