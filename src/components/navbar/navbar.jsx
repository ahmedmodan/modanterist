import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const mapStateToProps = (state) => ({
  state
});

export class NavBar extends React.Component {
  static propTypes = {
    location: PropTypes.object
  }


  isLoggedIn() {
    // TODO: WRITE FUNCTION TO CHECK LOGIN STATUS
  }

  get loginLogout() {
    if (this.isLoggedIn()) {
      return <button className="btn btn-primary"><Link to="/">Logout</Link></button>;
    }
    return <Link to="/">Login</Link>;
  }

  render() {
    return (
        <nav className="nav-wrapper">
          <Link to="/" className="brand-logo">Modanterist</Link>
          <ul className="right hide-on-med-and-down">
            <li>
              { this.loginLogout }
            </li>
          </ul>
        </nav>
    );
  }
}

export default connect(mapStateToProps)(NavBar);
