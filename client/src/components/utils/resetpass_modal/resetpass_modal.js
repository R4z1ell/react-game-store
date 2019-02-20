import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import './resetpass_modal.scss';

import { MdClose } from 'react-icons/md';
import { getOverlayStatus } from '../../../store/actions/site_actions';

class ResetPassModal extends Component {
  state = {
    newPassword: '',
    repeatPassword: '',
    username: '',
    email: '',
    resetToken: '',
    errorPass: false,
    loading: false
  };

  componentDidMount() {
    if (this.props.location.pathname.includes('reset_password')) {
      let splitPath = this.props.location.pathname.split('/');
      axios.get(`/api/users/findUserByResetToken/${splitPath[2]}`).then(res => {
        if (res.data.success) {
          this.setState({
            username: res.data.username,
            email: res.data.email,
            resetToken: splitPath[2]
          });
        }
      });
    }
  }

  closeResetPass = () => {
    this.props.closeResetPassModal(false);
  };

  submitForm = event => {
    event.preventDefault();

    if (
      this.state.newPassword !== this.state.repeatPassword ||
      this.state.newPassword === '' ||
      this.state.repeatPassword === ''
    ) {
      this.setState({
        errorPass: true
      });
    }
    if (this.state.newPassword === this.state.repeatPassword) {
      const dataToSubmit = {
        password: this.state.newPassword
      };
      axios
        .post('/api/users/reset_password', {
          ...dataToSubmit,
          resetToken: this.state.resetToken
        })
        .then(response => {
          if (response.data.success) {
            this.setState({
              loading: true
            });
            setTimeout(() => {
              this.setState({
                loading: false
              });
              this.closeResetPass();
              this.props.history.push('/');
              this.props.dispatch(getOverlayStatus(true, true));
            }, 2000);
          }
        });
    }
  };

  handleChange = event => {
    if (event.target.name === 'newPassword') {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    if (event.target.name === 'repeatPassword') {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  render() {
    const fieldPass = this.state.errorPass
      ? 'form__field field field--error'
      : 'form__field field';

    return (
      <div className="modal__box">
        <div className="modal__content-wrapper">
          <div className="modal__content-item">
            <div className="form--password-reset form-padding">
              <h2 className="form__title">
                <div className="form__title--text">Account</div>
              </h2>
              {this.state.username === '' && this.state.email === '' ? null : (
                <div className="user">
                  <h3 className="user__name">{this.state.username}</h3>
                  <p className="user__email">{this.state.email}</p>
                </div>
              )}
              <ol className="form__fieldset">
                <li className="form__field field">
                  <input
                    type="password"
                    placeholder="New Password"
                    className="field__input"
                    name="newPassword"
                    value={this.state.newPassword}
                    onChange={this.handleChange}
                  />
                </li>
                <li className={fieldPass}>
                  <input
                    type="password"
                    placeholder="Repeat password"
                    className="field__input"
                    name="repeatPassword"
                    value={this.state.repeatPassword}
                    onChange={this.handleChange}
                  />
                  {this.state.errorPass ? (
                    <span className="field__msg is-hidden">
                      Passwords don't match
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
                    Save new password
                  </button>
                </li>
              </ol>
              <div className="form__footer">
                <button
                  className="form__footer-btn"
                  onClick={this.closeResetPass}
                >
                  Cancel
                </button>
              </div>
            </div>
            <button className="modal__btn-close" onClick={this.closeResetPass}>
              <MdClose fill="#595959" size="1em" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(ResetPassModal));
