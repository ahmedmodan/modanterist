import React from 'react';
import { Link } from 'react-router';

export class NavBar extends React.Component {

  get loginStatus() {
    if (this.isLoggedIn()) {
      return <Link to="/logout">Logout</Link>;
    }
    return <Link to="/login">Login</Link>;
  }

  isLoggedIn() {
    // TODO: WRITE FUNCTION TO CHECK LOGIN STATUS
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-faded navbar-fixed-top">
        <a className="navbar-brand" href="/explore">Modanterist</a>
        <ul className="nav navbar-nav">
          <li className="pull-xs-right">
            { this.loginStatus }
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
