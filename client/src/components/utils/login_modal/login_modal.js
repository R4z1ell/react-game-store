import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../../store/actions/user_actions';

import './login_modal.scss';

class LoginModal extends Component {
  state = {
    email: '',
    password: '',
    errorEmail: false,
    errorPassword: false,
    blurEmail: false,
    blurPassword: false,
    validEmail: false,
    logInBtnClicked: false
  };

  submitForm = event => {
    event.preventDefault();

    if (
      this.state.email === '' &&
      this.state.password === '' &&
      !this.state.errorEmail
    ) {
      this.setState({
        errorEmail: true,
        blurPassword: true
      });
    }
    if (
      this.state.email !== '' &&
      this.state.password !== '' &&
      this.state.validEmail &&
      this.state.password.length >= 5
    ) {
      const dataToSubmit = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.dispatch(loginUser(dataToSubmit)).then(res => {
        if (res.payload.loginSuccess) {
          console.log('Logged in');
        } else {
          if (res.payload.message.length > 14) {
            this.setState({
              blurEmail: true
            });
          }
          if (res.payload.message.length <= 14) {
            this.setState({
              errorPassword: true,
              logInBtnClicked: true
            });
          }
        }
      });
    }
  };

  handleChange = event => {
    if (event.target.name === 'email') {
      this.setState({
        [event.target.name]: event.target.value,
        errorEmail: false,
        blurEmail: false
      });
      if (/\S+@\S+\.\S+/.test(event.target.value)) {
        this.setState({
          validEmail: true
        });
      }
      if (/\S+@\S+\.\S+/.test(event.target.value) === false) {
        this.setState({
          validEmail: false
        });
      }
    }
    if (event.target.name === 'password') {
      this.setState({
        [event.target.name]: event.target.value,
        errorPassword: false,
        blurPassword: false
      });
    }
  };

  handleBlur = event => {
    if (
      event.target.name === 'email' &&
      event.target.value === '' &&
      this.state.blurEmail === false
    ) {
      this.setState({
        errorEmail: true
      });
    }
    if (
      event.target.name === 'email' &&
      /\S+@\S+\.\S+/.test(event.target.value) === false &&
      event.target.value.length > 0
    ) {
      this.setState({
        blurEmail: true
      });
    }
    if (event.target.name === 'password' && event.target.value.length < 5) {
      this.setState({
        blurPassword: true
      });
    }
    if (event.target.name === 'password' && event.target.value === '') {
      this.setState({
        errorPassword: true
      });
    }
  };

  render() {
    const fieldEmail =
      this.state.errorEmail || this.state.blurEmail
        ? 'form__field field field--error'
        : 'form__field field';

    const fieldPassword =
      this.state.errorPassword || this.state.blurPassword
        ? 'form__field field field--error'
        : 'form__field field';

    return (
      <div className="modal modal__box">
        <div className="modal__content-wrapper">
          <div className="modal__content-item">
            <form
              className="form--login"
              onSubmit={event => this.submitForm(event)}
            >
              <h2 className="form__title">
                <div className="form__title--text">Log in</div>
              </h2>
              <ol className="form__fieldset">
                <li className={fieldEmail}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="field__input"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errorEmail ? (
                    <span className="field__msg is-hidden">Email required</span>
                  ) : null}
                  {this.state.blurEmail ? (
                    <span className="field__msg is-hidden">
                      Incorrect email
                    </span>
                  ) : null}
                </li>
                <li className={fieldPassword}>
                  <input
                    type="password"
                    placeholder="Password"
                    className="field__input"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errorPassword ? (
                    <span className="field__msg is-hidden">
                      This field is required
                    </span>
                  ) : null}
                  {this.state.password === '' && this.state.blurPassword ? (
                    <span className="field__msg is-hidden">
                      Password required
                    </span>
                  ) : null}
                  {this.state.password.length > 0 &&
                  this.state.password.length < 5 &&
                  this.state.blurPassword ? (
                    <span className="field__msg is-hidden">
                      At least 5 characters required
                    </span>
                  ) : null}
                  {this.state.errorPassword && this.state.logInBtnClicked ? (
                    <span className="field__msg is-hidden">
                      Incorrect password
                    </span>
                  ) : null}
                </li>
              </ol>
              <ol className="form__fieldset">
                <li className="form__field field btn-slot">
                  <button
                    className="btn--login"
                    onClick={event => this.submitForm(event)}
                  >
                    Log in now
                  </button>
                </li>
              </ol>
            </form>
            <button className="modal__btn-close" />
            <footer className="modal__footer">
              <span className="modal__footer--reset-pass">Password reset</span>
              <span
                className="modal__footer--sign-up"
                onClick={() => this.props.switchToSignUp(true)}
              >
                Sign up now
              </span>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(LoginModal);
