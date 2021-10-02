import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

// path directory
import { Navbar } from './components';
import { Login, Register, LandingPage, Home } from './pages';
import { API_URL } from './helper';

const App = () => {
  const [listofPeeps, setListOfPeeps] = useState([]);

  // getting the data from backend
  useEffect(() => {
    Axios.get(`${API_URL}/users`).then((res) => {
      setListOfPeeps(res.data);
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={Home} path="/homepage" />
        <Route component={LandingPage} path="/" />
      </Switch>
    </Router>
  );
};

export default App;
