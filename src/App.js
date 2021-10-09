import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Axios from 'axios';

// path directory
import { Navbar } from './components';
import {
  Login,
  Register,
  LandingPage,
  AdminProducts,
  ProductDetail,
  CustomProduct,
} from './pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={AdminProducts} path="/admin" />
        <Route component={ProductDetail} path="/productdetail/:product_id" />
        <Route component={CustomProduct} path="/customproduct" />
        <Route component={LandingPage} path="/" />
      </Switch>
    </Router>
  );
};

export default App;
