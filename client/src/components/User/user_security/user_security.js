import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import './user_security.scss';

import SettingsLayout from '../settings_layout/settings_layout';
import { updateUserData } from '../../../store/actions/user_actions';

import { MdLens } from 'react-icons/md';
import { getOverlayStatus } from '../../../store/actions/site_actions';

class UserSecurity extends Component {
  state = {
    btnClicked: false,
    loading: false,
    showChange: true,
    email: '',
    notEmail: false
  };

  updateUsername = event => {
    event.preventDefault();

    if (/\S+@\S+\.\S+/.test(event.target.value) === false) {
      this.setState({
        notEmail: true
      });
    }

    if (/\S+@\S+\.\S+/.test(this.state.email) && this.state.email !== '') {
      const dataToSubmit = {
        email: this.state.email
      };

      this.setState({
        btnClicked: true,
        loading: true,
        showChange: false,
        notEmail: false
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
          () => this.props.history.push('/user/settings/security')
        );
      }, 1500);
    }
  };

  handleChange = event => {
    if (event.target.name === 'email') {
      if (this.state.notEmail) {
        this.setState({
          notEmail: false
        });
      }
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  inputErrorStyle = () => {
    if (this.state.notEmail) {
      return {
        background: '#eeddd5',
        borderColor: '#b8a79f'
      };
    }
  };

  sendResetPassEmail = () => {
    const dataToSubmit = { email: this.props.user.userData.email };
    axios.post('/api/users/reset_user', dataToSubmit).then(response => {
      if (response.data.success) {
        this.props.dispatch(getOverlayStatus(true, null, null, true));
      } else {
        console.log('error');
      }
    });
  };

  render() {
    const btnClass = this.state.btnClicked
      ? 'btn--change btn--change__updated'
      : 'btn--change';

    return (
      <SettingsLayout>
        <div className="module-header settings-content__header">
          Account login
        </div>
        <form>
          <ul className="settings-list">
            <li className="settings-list__item settings-item settings-item--security">
              <span className="settings-item__label settings-item__section">
                Email
              </span>
              <strong
                className="settings-item__value settings-item__section"
                style={{ width: '72%' }}
              >
                <div style={{ position: 'relative', width: '270px' }}>
                  <input
                    type="text"
                    name="email"
                    placeholder={this.props.user.userData.email}
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="user-security__input"
                    style={this.inputErrorStyle()}
                    autoComplete="off"
                  />
                  {this.state.notEmail ? (
                    <span
                      className="settings-item__msg error"
                      style={{ right: '7px' }}
                    >
                      Incorrect email
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
            </li>
            <li className="settings-list__item settings-item settings-item--security">
              <span className="settings-item__label settings-item__section">
                Password
              </span>
              <strong
                className="settings-item__value settings-item__section"
                style={{ width: '72%' }}
              >
                <MdLens size="0.7em" style={{ marginRight: '4px' }} />
                <MdLens size="0.7em" style={{ marginRight: '4px' }} />
                <MdLens size="0.7em" style={{ marginRight: '4px' }} />
                <MdLens size="0.7em" style={{ marginRight: '4px' }} />
                <MdLens size="0.7em" style={{ marginRight: '4px' }} />
                <MdLens size="0.7em" />
              </strong>
              <span className="settings-item__action settings-item__section">
                <span className="btn--change" onClick={this.sendResetPassEmail}>
                  Change
                </span>
              </span>
            </li>
          </ul>
        </form>
      </SettingsLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(UserSecurity);
