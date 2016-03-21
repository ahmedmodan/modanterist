import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CoreLayout from './../layouts/CoreLayout.jsx';
import LandingView from './../containers/Landing/LandingView.jsx';

import counterRoutes from './counterRoutes.jsx';
import exploreRoutes from './exploreRoutes.jsx';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={LandingView} />
    { counterRoutes }
    { exploreRoutes }
    <Redirect from="*" to="/" />
  </Route>
);
