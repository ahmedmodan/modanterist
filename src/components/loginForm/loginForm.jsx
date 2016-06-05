import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
/* eslint-disable react/prefer-stateless-function */
export class LoginForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  render() {
    const { fields: { username, password }, handleSubmit } = this.props;
    return (
      <div className="row">
        <p className="text-info" >Sign Up below to get started</p>
        <div className="col-sm-4 col-md-4 col-md-offset-2 col-sm-offset-1">
          <form className="form-horizontal" onSubmit={handleSubmit} >
            <div className="form-group">
              <label htmlFor="username-input" >Username</label>
              <input type="text"
                className="form-control"
                placeholder="Username"
                id="username-input"
                { ...username }
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-input">Password</label>
              <input type="text"
                className="form-control"
                placeholder="Password"
                id="password-input"
                { ...password }
              />
            </div>
            <div className="form-group">
              <Link to="counter">
                <button className="btn btn-primary" type="submit">Sign Up</button>
              </Link>
            </div>
          </form>
          <p>
            Already have an account?
            <Link to="counter/hello"> Login here</Link>
          </p>
        </div>
      </div>
    );
  }
}
/* eslint-disable react/prefer-stateless-function */
export default reduxForm({
  form: 'loginForm',
  fields: ['username', 'password']
})(LoginForm);
