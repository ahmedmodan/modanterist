import React from 'react';
import { Route, IndexRoute } from 'react-router';


import HelloRoutes from '../containers/Hello/HelloRoutes';
import CounterView from './../containers/Counter/counterView.jsx';
import CoreLayout from '../layouts/CoreLayout';

export default (
  <Route path="/counter" component= { CoreLayout } >
    <IndexRoute component={ CounterView } />
    <Route path="/hello" component={ HelloRoutes } />
  </Route>
);
