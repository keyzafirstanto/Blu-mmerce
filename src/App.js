import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Axios from 'axios';

// path directory
import { Navbar } from './components';
import { Login, Register, LandingPage, Admin } from './pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={Admin} path="/admin" />
        <Route component={LandingPage} path="/" />
      </Switch>
    </Router>
  );
};

export default App;
