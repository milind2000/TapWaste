import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';

//pages
import HomePage from './Pages/Home';
import ContactPage from './Pages/Contact';
import AboutPage from './Pages/About';
import NoMatchPage from './Pages/404';


function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/404" component={NoMatchPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
