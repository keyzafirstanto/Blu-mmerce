import React, { useState } from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { API_URL } from '../../helper';

const Login = () => {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState({
    username: '',
    password: '',
  });

  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLoginInput({ ...loginInput, [name]: value });
  };

  const loginBtnHandler = () => {
    // request check user's information through API
    Axios.get(`${API_URL}/users`, {
      params: {
        username: loginInput.username,
      },
    })
      .then((res) => {
        if (res.data.length) {
          if (loginInput.password === res.data[0].password) {
            delete res.data[0].password;
            localStorage.setItem('userFound', JSON.stringify(res.data[0]));
            dispatch({
              type: 'USER_LOGIN',
              payload: res.data[0],
            });
            // If password is wrong
          } else {
            dispatch({
              type: 'USER_ERROR',
              payload: 'Wrong Password',
            });
          }
          // if user is not found
        } else {
          dispatch({
            type: 'USER_ERROR',
            payload: 'User Is Not Found',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ backgroundColor: 'wheat' }}>
      <Grid container style={{ height: '100vh' }}>
        <Grid item xs={12} sm={5} style={{ backgroundColor: '#082032' }}>
          <img
            src="/images/file20.png"
            alt="opalesque.png"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Grid>
        <Grid
          container
          xs={12}
          sm={7}
          style={{
            padding: 10,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 500,
              minWidth: 300,
            }}
          >
            <Grid container justify="center">
              <img src="/images/logo.png" alt="Blu.jpg" width={200} />
            </Grid>
            <TextField
              name="username"
              onChange={inputHandler}
              required
              label="Username"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="password"
              onChange={inputHandler}
              required
              label="Password"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 20 }} />
            <Button
              color="primary"
              variant="contained"
              onClick={loginBtnHandler}
            >
              Log in
            </Button>
            <div style={{ height: 20 }} />
            <Button component={Link} to="/register">
              Register Here
            </Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
