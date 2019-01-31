import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class ResetpassModal extends Component {
  state = {
    email: '',
    errorEmail: false,
    blurEmail: false,
    loading: false
  };

  render() {
    const fieldEmail =
      this.state.errorEmail || this.state.blurEmail
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
                    value={this.state.email}
                    //onChange={this.handleChange}
                    //onBlur={this.handleBlur}
                  />
                  {this.state.errorEmail ? (
                    <span className="field__msg is-hidden">USER NOT FOUND</span>
                  ) : null}
                  {this.state.blurEmail ? (
                    <span className="field__msg is-hidden">
                      Incorrect email
                    </span>
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
                    Log in now
                  </button>
                </li>
              </ol>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetpassModal;
