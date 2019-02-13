import React from 'react';

import './user_security.scss';

import SettingsLayout from '../settings_layout/settings_layout';

const UserSecurity = props => {
  return (
    <SettingsLayout>
      <div className="module-header settings-content__header">
        Account login
      </div>
      <ul className="settings-list">
        <li className="settings-list__item settings-item settings-item--security">
          <span className="settings-item__label settings-item__section">
            Email
          </span>
          <strong className="settings-item__value settings-item__section">
            <input
              type="text"
              placeholder="francis@gmail.com"
              className="user-security__input"
            />
          </strong>
          <span className="settings-item__action settings-item__section">
            <span className="btn--change">Change</span>
          </span>
        </li>
        <li className="settings-list__item settings-item settings-item--security">
          <span className="settings-item__label settings-item__section">
            Password
          </span>
          <strong className="settings-item__value settings-item__section">
            <input
              type="text"
              placeholder="******"
              className="user-security__input"
            />
          </strong>
          <span className="settings-item__action settings-item__section">
            <span className="btn--change">Change</span>
          </span>
        </li>
      </ul>
    </SettingsLayout>
  );
};

export default UserSecurity;
