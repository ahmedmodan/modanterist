import React from 'react';
import { Link } from 'react-router';

/* eslint-disable react/prefer-stateless-function */
export default class HelloRoutes extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Routing!!</h1>
        <Link to="/counter">Go Back To The Counter!!</Link>
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */
