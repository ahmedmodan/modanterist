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

  constructor(props) {
    super(props);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  get loginStatus() {
    if (this.isLoggedIn()) {
      return <button className="btn btn-primary"><Link to="/">Logout</Link></button>;
    }
    return <Link to="/">Login</Link>;
  }

  get PinButton() {
    return <button className="btn btn-secondary" onClick={ this.handlePin } >PIN</button>;
  }

  handlePin() {
    // TODO: CALL ACTION CREATER TO POST A PIN TO THE BOARD
  }

  isLoggedIn() {
    // TODO: WRITE FUNCTION TO CHECK LOGIN STATUS
  }

  render() {
    console.log('these are props', this.props);
    return (
      <nav className="navbar navbar-light bg-faded navbar-fixed-top">
        <a className="navbar-brand" href="/explore">Modanterist</a>
        <ul className="nav navbar-nav">
          <li className="pull-xs-right">
            { this.loginStatus }
          </li>
          <li className="pull-xs-right">
            { this.PinButton }
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(NavBar);
