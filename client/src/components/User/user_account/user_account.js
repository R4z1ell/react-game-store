import React, { Component } from 'react';

import './user_account.scss';

import SettingsLayout from '../settings_layout/settings_layout';

class UserAccount extends Component {
  render() {
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
              <span className="settings-item__action settings-item__section" />
            </strong>
          </li>
          <li className="settings-list__item settings-item">
            <span className="settings-item__label settings-item__section">
              Username
            </span>
            <strong className="settings-item__value settings-item__section">
              R4z1ell
            </strong>
            <span className="settings-item__action settings-item__section">
              <span className="btn--change">Change</span>
            </span>
          </li>
        </ul>
      </SettingsLayout>
    );
  }
}

export default UserAccount;
