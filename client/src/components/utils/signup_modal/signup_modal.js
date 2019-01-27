import React, { Component } from 'react';

class SignupModal extends Component {
  render() {
    return (
      <div className="modal modal__box">
        <div className="modal__content-wrapper">
          <div className="modal__content-item">
            <form className="form--login">
              <h2 className="form__title">
                {/* <svg  className="key-logo"></svg> */}
                <div className="form__title--text">Sign-up</div>
              </h2>
              <ol className="form__fieldset">
                <li className="form__field field">
                  <input
                    type="text"
                    placeholder="Username"
                    className="field__input"
                  />
                  {/* <span className="field__msg is-hidden">Incorrect email</span> */}
                </li>
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
                  <button className="btn--login">Sign up now</button>
                </li>
              </ol>
            </form>
            <button className="modal__btn-close" />
            <footer className="modal__footer">
              <span
                className="modal__footer--login"
                onClick={() => this.props.switchToLogIn(true)}
              >
                Log in to your account
              </span>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupModal;
