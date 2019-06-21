import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import ContactPage from '../Contact';
import Portfolio from '../Projects';
import Main from '../Home';

export const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={ Main } />
      <Route exact path='/contact' component={ ContactPage } />
      <Route exact path='/projects' component={ Portfolio } />
      <Route path='/error' component={ ErrorPage } />
    </Switch>
  </div>
);

export default App;
