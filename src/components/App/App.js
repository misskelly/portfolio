import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Contact from '../Contact';
import Projects from '../Projects';
import Home from '../Home';

const App = () => {
  return (
    <div>
      <h1>KellyZick</h1>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/contact' component={ Contact } />
          <Route path='/projects' component={ Projects } />
          <Route path='/error' component={ ErrorPage } />
        </Switch>
    </div>
  )
}

export default App
