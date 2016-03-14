import React from 'react';
import { Route, IndexRoute } from 'react-router';

import LandingLayout from './../layouts/LandingLayout.jsx';
import LandingView from './../containers/Landing/LandingView.jsx';

export default (
  <Route path="/" component={LandingLayout}>
    <IndexRoute component={LandingView} />
  </Route>
);
