import React, { Component } from 'react';

import './login_modal.scss';

class LoginModal extends Component {
  render() {
    return (
      <div className="modal modal__box">
        <div className="modal__content-wrapper">
          <div className="modal__content-item">
            <form className="form--login">
              <h2 className="form__title">
                {/* <svg  className="key-logo"></svg> */}
                <div className="form__title--text">Log in</div>
              </h2>
              <ol className="form__fieldset">
                <li className="form__field field">
                  <input
                    type="email"
                    placeholder="Email"
                    className="field__input"
                  />
                  {/* <span className="field__msg is-hidden">Incorrect email</span> */}
                </li>
                <li className="form__field field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="field__input"
                  />
                  {/* <span className="field__msg is-hidden">
                    Password required
                  </span> */}
                </li>
              </ol>
              <ol className="form__fieldset">
                <li className="form__field field btn-slot">
                  <button className="btn--login">Log in now</button>
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

export default LoginModal;
