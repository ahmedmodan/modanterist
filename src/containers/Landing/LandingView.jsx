import React from 'react';
import LoginForm from './../../components/loginForm/loginForm.jsx';

export default class LandingView extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome to Modanterist</h1>
        <LoginForm />
      </div>
    );
  }
}
