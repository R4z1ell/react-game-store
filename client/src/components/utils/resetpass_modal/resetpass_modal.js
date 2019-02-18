import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import './resetpass_modal.scss';

import { MdClose } from 'react-icons/md';

class ResetpassModal extends Component {
  state = {
    email: '',
    errorEmail: false,
    blurEmail: false,
    notEmail: false,
    loading: false
  };

  submitForm = event => {
    event.preventDefault();

    if (this.state.email === '') {
      this.setState({
        errorEmail: true
      });
    }
    if (/\S+@\S+\.\S+/.test(this.state.email) === false) {
      this.setState({
        notEmail: true
      });
    }
    if (
      /\S+@\S+\.\S+/.test(this.state.email) &&
      this.state.email !== '' &&
      this.state.validEmail
    ) {
      this.setState({
        loading: true
      });
      setTimeout(() => {
        this.setState({
          loading: false
        });
        this.props.showSuccessMessage(true);
      }, 1000);
    }
  };

  closeLogin = () => {
    this.props.closeLoginModal(false);
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
  };

  handleBlur = event => {
    if (event.target.name === 'email' && event.target.value === '') {
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
  };

  render() {
    const fieldEmail =
      this.state.errorEmail || this.state.blurEmail || this.state.notEmail
        ? 'form__field field field--error'
        : 'form__field field';

    return (
      <div className="modal__box">
        <div className="modal__content-wrapper">
          <div className="modal__content-item">
            <form className="form--password-reset">
              <h2 className="form__title">
                <div className="form__title--text">Account</div>
              </h2>
              <ol className="form__fieldset">
                <li className={fieldEmail}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="field__input"
                    name="email"
                    autoComplete="off"
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
              </ol>
              <ol className="form__fieldset">
                <li className="form__field field btn-slot">
                  <button
                    className="btn--new-password"
                    onClick={event => this.submitForm(event)}
                  >
                    {this.state.loading ? (
                      <Loader type="Oval" color="#fff" height="20" width="20" />
                    ) : null}
                    Get new password
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

export default ResetpassModal;
