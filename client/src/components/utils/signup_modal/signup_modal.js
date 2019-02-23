import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { MdClose } from 'react-icons/md';
import { registerUser } from '../../../store/actions/user_actions';
import { getOverlayStatus } from '../../../store/actions/site_actions';

class SignupModal extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    usernameTaken: false,
    errorUsername: false,
    errorUsernameLength: false,
    errorEmail: false,
    emailRegistered: false,
    errorPassword: false,
    blurUsername: false,
    blurEmail: false,
    blurPassword: false,
    validEmail: false,
    notEmail: false,
    logInBtnClicked: false,
    loading: false
  };

  submitForm = event => {
    event.preventDefault();

    if (this.state.username === '') {
      this.setState({
        errorUsername: true
      });
    }
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
      this.state.username !== '' &&
      this.state.email !== '' &&
      this.state.password !== '' &&
      this.state.validEmail &&
      this.state.password.length >= 5
    ) {
      const dataToSubmit = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      };
      this.props.dispatch(registerUser(dataToSubmit)).then(res => {
        if (res.payload.success) {
          this.setState({
            loading: true
          });
          setTimeout(() => {
            this.setState({
              loading: false
            });
            this.closeSignUp();
            this.props.history.push('/');
          }, 1000);
          setTimeout(() => {
            this.props.dispatch(getOverlayStatus(true));
            this.props.switchToLogIn(true);
          }, 2000);
        } else {
          if (res.payload.userTaken) {
            this.setState({
              loading: true
            });
            setTimeout(() => {
              this.setState({
                loading: false,
                usernameTaken: true
              });
            }, 1000);
          }
          if (res.payload.emailTaken) {
            this.setState({
              loading: true
            });
            setTimeout(() => {
              this.setState({
                loading: false,
                emailRegistered: true
              });
            }, 1000);
          }
        }
      });
    }
  };

  handleChangeUsername = event => {
    if (event.target.name === 'username') {
      this.setState({
        [event.target.name]: event.target.value,
        errorUsername: false,
        errorUsernameLength: false,
        usernameTaken: false
      });
    }
  };

  handleBlurUsername = event => {
    if (event.target.name === 'username' && event.target.value === '') {
      this.setState({ errorUsername: true });
    }
    if (event.target.value.length > 20) {
      this.setState({ errorUsernameLength: true });
    }
  };

  handleChange = event => {
    if (event.target.name === 'email') {
      this.setState({
        [event.target.name]: event.target.value,
        errorEmail: false,
        blurEmail: false,
        emailRegistered: false,
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

  inputErrorStyle = () => {
    if (
      this.state.errorUsername ||
      this.state.errorUsernameLength ||
      this.state.usernameTaken
    ) {
      return {
        background: '#eeddd5',
        borderColor: '#b8a79f'
      };
    }
  };

  closeSignUp = () => {
    this.props.closeSignUpModal(false);
  };

  render() {
    const fieldEmail =
      this.state.errorEmail ||
      this.state.blurEmail ||
      this.state.notEmail ||
      this.state.emailRegistered
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
            <form className="form--login">
              <h2 className="form__title">
                <div className="form__title--text">Sign-up</div>
              </h2>
              <ol className="form__fieldset">
                <li className="form__field field">
                  <input
                    type="text"
                    placeholder="Username"
                    className="field__input"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChangeUsername}
                    onBlur={this.handleBlurUsername}
                    style={this.inputErrorStyle()}
                    autoComplete="off"
                  />
                  {this.state.errorUsername ? (
                    <span
                      className="settings-item__msg error"
                      style={{ right: '4px' }}
                    >
                      Username required
                    </span>
                  ) : null}
                  {this.state.errorUsernameLength ? (
                    <span
                      className="settings-item__msg error"
                      style={{ right: '4px' }}
                    >
                      Max 20 chars allowed
                    </span>
                  ) : null}
                  {this.state.usernameTaken ? (
                    <span
                      className="settings-item__msg error"
                      style={{ right: '4px' }}
                    >
                      Username already taken
                    </span>
                  ) : null}
                </li>
                <li className={fieldEmail}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="field__input"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    autoComplete="off"
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
                  {this.state.emailRegistered ? (
                    <span className="field__msg is-hidden">
                      Email already registered
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
                    autoComplete="off"
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
                    Sign up now
                  </button>
                </li>
              </ol>
            </form>
            <footer className="modal__footer">
              <span
                className="modal__footer--login"
                onClick={() => this.props.switchToLogIn(true)}
              >
                Log in to your account
              </span>
            </footer>
            <button className="modal__btn-close" onClick={this.closeSignUp}>
              <MdClose fill="#595959" size="1em" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(SignupModal));
