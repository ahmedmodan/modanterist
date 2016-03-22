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
      <div>
        <nav className="navbar navbar-light bg-faded navbar-fixed-top">
          <a className="navbar-brand" href="/explore">Modanterist</a>
          <ul className="nav navbar-nav">
            <li className="pull-xs-right">
              { this.loginLogout }
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NavBar);
