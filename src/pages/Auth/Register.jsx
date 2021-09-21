import React, { useState } from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from '../../helper';

const Register = () => {
  const dispatch = useDispatch();
  const userGlobal = useSelector((state) => state.user);

  const [registerInput, setRegisterInput] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });

  // input data
  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setRegisterInput({ ...registerInput, [name]: value });
  };

  // a register button
  const registerBtnHandler = () => {
    // check user information, has already been registered?
    Axios.get(`${API_URL}/users`, {
      params: {
        username: registerInput.username,
      },
    })
      .then((result) => {
        if (!result.data.length) {
          Axios.post(`${API_URL}/users`, {
            fullName: registerInput.fullName,
            username: registerInput.username,
            email: registerInput.email,
            password: registerInput.password,
            role: 'user',
          })
            .then((res) => {
              alert(`Hello ${registerInput.fullName}! Welcome to Blu!`);
              dispatch({
                type: 'USER_LOGIN',
                payload: res.data,
              });
            })
            .catch((err) => {
              alert(err);
            });
        } else {
          alert(
            `username ${registerInput.username} has already been registered`
          );
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (userGlobal.id) {
    return <Redirect to="/home" />;
  }

  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={5} style={{ backgroundColor: '#082032' }}>
          <img
            src="/images/opalesque5.jpg"
            alt="opalesque.png"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 700,
              minWidth: 300,
            }}
          >
            <Grid container justify="center">
              <img src="/images/logo.png" alt="Blu.jpg" width={200} />
            </Grid>
            <TextField
              required
              onChange={inputHandler}
              label="Full Name"
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
              required
              onChange={inputHandler}
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
              required
              onChange={inputHandler}
              label="Email"
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
              required
              onChange={inputHandler}
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
              onClick={registerBtnHandler}
            >
              Register
            </Button>
            <div style={{ height: 20 }} />
            <Button component={Link} to="/login">
              Log in
            </Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
