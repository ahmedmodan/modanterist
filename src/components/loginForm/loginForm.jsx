import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import SmallFormInput from './../smallFormInput/smallFormInput';
import Row from './../styleComponents/Row';
import { actions as authActions } from './../../redux/modules/auth';

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.get('loggedIn')
});

/* eslint-disable react/prefer-stateless-function */
export class LoginForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    toggleLogIn: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  }

  render() {
    const { fields: { username, password }, handleSubmit } = this.props;
    return (
      <Row>
        <form onSubmit={ handleSubmit(this.props.toggleLogIn) } >
          <div className="col s6 offset-s3">
            <SmallFormInput field={ username } inputLabel="Username" />
          </div>
          <div className="col s6 offset-s3">
            <SmallFormInput field={ password } inputLabel="Password" />
          </div>
          <div className="col offset-s6 offset-m8">
            <button type="submit" className="btn waves-effect wave-light">Log In</button>
          </div>
        </form>
      </Row>
    );
  }
}
/* eslint-disable react/prefer-stateless-function */
export default reduxForm({
  form: 'loginForm',
  fields: ['username', 'password']
}, mapStateToProps, authActions)(LoginForm);
