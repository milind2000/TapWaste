import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';

//pages
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import AboutPage from './Pages/About';
import CartPage from './Pages/Cart';
import NoMatchPage from './Pages/404';

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={RegisterPage} />          
          <Route path="/about" component={AboutPage} />
          <Route path="/404" component={NoMatchPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
