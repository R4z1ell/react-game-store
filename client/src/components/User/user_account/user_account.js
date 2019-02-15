import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import './user_account.scss';

import SettingsLayout from '../settings_layout/settings_layout';
import { updateUserData } from '../../../store/actions/user_actions';

class UserAccount extends Component {
  state = {
    btnClicked: false,
    loading: false,
    showChange: true,
    username: '',
    errorUsername: false,
    errorUsernameLength: false
  };

  updateUsername = event => {
    event.preventDefault();

    if (this.state.username === '') {
      this.setState({
        errorUsername: true
      });
    }
    if (this.state.username.length > 20) {
      this.setState({
        errorUsernameLength: true
      });
    }
    if (this.state.username !== '' && this.state.username.length <= 20) {
      const dataToSubmit = {
        username: this.state.username
      };

      this.setState({
        btnClicked: true,
        loading: true,
        showChange: false
      });
      setTimeout(() => {
        this.setState(
          {
            loading: false,
            showChange: false
          },
          () => this.props.dispatch(updateUserData(dataToSubmit))
        );
      }, 1000);
      setTimeout(() => {
        this.setState(
          {
            btnClicked: false,
            showChange: true
          },
          () => this.props.history.push('/user/settings/account')
        );
      }, 1500);
    }
  };

  handleChange = event => {
    if (event.target.name === 'username') {
      if (this.state.errorUsername) {
        this.setState({
          errorUsername: false
        });
      }
      if (this.state.errorUsernameLength) {
        this.setState({
          errorUsernameLength: false
        });
      }
      this.setState({
        [event.target.name]: event.target.value.trim()
      });
    }
  };

  inputErrorStyle = () => {
    if (this.state.errorUsername || this.state.errorUsernameLength) {
      return {
        background: '#eeddd5',
        borderColor: '#b8a79f'
      };
    }
  };

  render() {
    const btnClass = this.state.btnClicked
      ? 'btn--change btn--change__updated'
      : 'btn--change';

    const errorStyleUsername = this.state.errorUsername ? '5px' : null;
    const errorStyleLength = this.state.errorUsernameLength ? '23px' : null;

    return (
      <SettingsLayout>
        <div className="module-header settings-content__header">
          My identity
        </div>
        <ul className="settings-list">
          <li className="settings-list__item settings-item">
            <span className="settings-item__label settings-item__section">
              Avatar
            </span>
            <strong className="settings-item__value settings-item__section">
              <img
                src="/images/avatar_medium.jpg"
                alt="avatar_medium"
                className="settings-item__avatar"
              />
            </strong>
            <span className="settings-item__action settings-item__section" />
          </li>
          <li className="settings-list__item settings-item">
            <span className="settings-item__label settings-item__section">
              Username
            </span>
            <form onSubmit={event => this.updateUsername(event)}>
              <strong className="settings-item__value settings-item__section">
                <div style={{ position: 'relative', width: '270px' }}>
                  <input
                    type="text"
                    name="username"
                    placeholder={this.props.user.userData.username}
                    value={this.state.username}
                    onChange={this.handleChange}
                    className="user-account__input"
                    style={this.inputErrorStyle()}
                  />
                  {this.state.errorUsername ? (
                    <span
                      className="settings-item__msg error"
                      style={{ right: errorStyleUsername }}
                    >
                      Can't be empty
                    </span>
                  ) : null}
                  {this.state.errorUsernameLength ? (
                    <span
                      className="settings-item__msg error"
                      style={{ right: errorStyleLength }}
                    >
                      Max 20 chars allowed
                    </span>
                  ) : null}
                </div>
              </strong>
              <span className="settings-item__action settings-item__section">
                <span
                  className={btnClass}
                  onClick={event => this.updateUsername(event)}
                >
                  {this.state.loading ? (
                    <Loader type="Oval" color="#fff" height="20" width="20" />
                  ) : null}
                  {!this.state.loading && !this.state.showChange
                    ? 'Updated'
                    : null}
                  {this.state.showChange ? 'Change' : null}
                </span>
              </span>
            </form>
          </li>
        </ul>
      </SettingsLayout>
    );
  }
}

export default UserAccount;
