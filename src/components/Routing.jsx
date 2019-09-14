import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Initial from './Initial';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Initial} />
    </Switch>
  </Router>
);