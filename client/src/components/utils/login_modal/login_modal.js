import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import './login_modal.scss';

import { MdClose } from 'react-icons/md';

import { loginUser, auth } from '../../../store/actions/user_actions';

class LoginModal extends Component {
  state = {
    email: '',
    password: '',
    errorEmail: false,
    errorPassword: false,
    blurEmail: false,
    blurPassword: false,
    validEmail: false,
    notEmail: false,
    logInBtnClicked: false,
    loading: false
  };

  submitForm = event => {
    event.preventDefault();

    if (this.state.email === '' && this.state.password === '') {
      this.setState({
        errorEmail: true,
        blurPassword: true
      });
    }
    if (/\S+@\S+\.\S+/.test(this.state.email) && this.state.password === '') {
      this.setState({
        errorPassword: true
      });
    }
    if (
      /\S+@\S+\.\S+/.test(this.state.email) === false &&
      this.state.password === ''
    ) {
      this.setState({
        notEmail: true,
        errorPassword: true
      });
    }
    if (this.state.email === '' && this.state.password.length > 0) {
      this.setState({
        errorEmail: true
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
          this.setState({
            loading: true
          });
          this.props.dispatch(auth());
          setTimeout(() => {
            this.setState({
              loading: false
            });
            this.props.closeOverlay(false);
            this.props.history.push('/');
          }, 1000);
        } else {
          if (res.payload.message.length > 14) {
            this.setState({
              errorEmail: true,
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
        blurEmail: false,
        notEmail: false
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
        notEmail: true
      });
    }
    if (/\S+@\S+\.\S+/.test(event.target.value)) {
      this.setState({
        notEmail: false
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

  closeLogin = () => {
    this.props.closeLoginModal(false);
  };

  render() {
    const fieldEmail =
      this.state.errorEmail || this.state.blurEmail || this.state.notEmail
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
                  {this.state.notEmail ? (
                    <span className="field__msg is-hidden">
                      Incorrect email
                    </span>
                  ) : null}
                  {this.state.errorEmail ? (
                    <span className="field__msg is-hidden">Email required</span>
                  ) : null}
                  {this.state.blurEmail ? (
                    <span className="field__msg is-hidden">USER NOT FOUND</span>
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
                      Password required
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
                    {this.state.loading ? (
                      <Loader type="Oval" color="#fff" height="20" width="20" />
                    ) : null}
                    Log in now
                  </button>
                </li>
              </ol>
            </form>
            <footer className="modal__footer">
              <span
                className="modal__footer--reset-pass"
                onClick={() => this.props.switchToRequestPass(true)}
              >
                Password reset
              </span>
              <span
                className="modal__footer--sign-up"
                onClick={() => this.props.switchToSignUp(true)}
              >
                Sign up now
              </span>
            </footer>
            <button className="modal__btn-close" onClick={this.closeLogin}>
              <MdClose fill="#595959" size="1em" />
            </button>
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

export default connect(mapStateToProps)(withRouter(LoginModal));
