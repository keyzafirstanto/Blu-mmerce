import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// path directory
import { Navbar } from './components';
import { Login, Register, LandingPage, Home } from './pages';

const App = () => {
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
