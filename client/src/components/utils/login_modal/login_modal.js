import React, { Component } from 'react';

class LoginModal extends Component {
  render() {
    return (
      <div className="modal modal-box">
        <div className="modal__content-wrapper">
          <div className="modal__content-item">
            <form className="form--login">
              <h2 className="form__title">
                {/* <svg  className="key-logo"></svg> */}
                <div className="form__title--text">Log in</div>
              </h2>
              <ol className="form__fieldset">
                <li className="form__field field">
                  <input type="email" placeholder="Email" />
                  <span className="field__msg is-hidden">Incorrect email</span>
                </li>
                <li className="form__field field">
                  <input type="password" placeholder="Password" />
                  <span className="field__msg is-hidden">
                    Password required
                  </span>
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
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
