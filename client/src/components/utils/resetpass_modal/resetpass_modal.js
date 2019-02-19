import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import './resetpass_modal.scss';

import { MdClose } from 'react-icons/md';

class ResetPassModal extends Component {
  state = {
    username: '',
    email: '',
    loading: false
  };

  componentDidMount() {
    if (this.props.location.pathname.includes('reset_password')) {
      let splitPath = this.props.location.pathname.split('/');
      axios.get(`/api/users/findUserByResetToken/${splitPath[2]}`).then(res => {
        this.setState({
          username: res.data.username,
          email: res.data.email
        });
      });
    }
  }

  render() {
    return (
      <div className="modal__box">
        <div className="modal__content-wrapper">
          <div className="modal__content-item">
            <form className="form--password-reset form-padding">
              <h2 className="form__title">
                <div className="form__title--text">Account</div>
              </h2>
              <div className="user">
                <h3 className="user__name">{this.state.username}</h3>
                <p className="user__email">{this.state.email}</p>
              </div>
              <ol className="form__fieldset">
                <li className="form__field field">
                  <input
                    type="password"
                    placeholder="New Password"
                    className="field__input"
                    name="password"
                    //value={this.state.password}
                    //onChange={this.handleChange}
                    //onBlur={this.handleBlur}
                  />
                </li>
                <li className="form__field field">
                  <input
                    type="password"
                    placeholder="Repeat password"
                    className="field__input"
                    name="password"
                    //value={this.state.password}
                    //onChange={this.handleChange}
                    //onBlur={this.handleBlur}
                  />
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
                <button className="form__footer-btn">Cancel</button>
              </div>
            </form>
            <button className="modal__btn-close" onClick={this.closeLogin}>
              <MdClose fill="#595959" size="1em" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ResetPassModal);
