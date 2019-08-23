import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import ContactPage from '../Contact';
import Portfolio from '../Projects';
import AboutMe from '../AboutMe';
import Main from '../Home';

export const App = () => (
  <div className='app'>
    <Switch>
      <Route exact path='/' component={ Main } />
      <Route exact path='/contact' component={ ContactPage } />
      <Route exact path='/projects' component={ Portfolio } />
      <Route exact path='/about' component={ AboutMe } />
      <Route path='/error' component={ ErrorPage } />
    </Switch>
  </div>
);

export default App;
