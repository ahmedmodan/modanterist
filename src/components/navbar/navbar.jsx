import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.get('loggedIn')
});

export class NavBar extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.authStatus = ::this.authStatus;
  }

  authStatus() {
    if (this.props.loggedIn) {
      return <a>Log out</a>;
    }
    return <a>Log In</a>;
  }

  render() {
    return (
        <nav className="nav-wrapper">
          <Link to="/" className="brand-logo">Modanterist</Link>
          <ul className="right hide-on-med-and-down">
            <li>
              { this.authStatus() }
            </li>
          </ul>
        </nav>
    );
  }
}

export default connect(mapStateToProps)(NavBar);
