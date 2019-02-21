import React from 'react';
import { connect } from 'react-redux';

import './user_security.scss';

import SettingsLayout from '../settings_layout/settings_layout';

const UserSecurity = props => {
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
              <input
                type="text"
                placeholder={props.user.userData.email}
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
            <strong
              className="settings-item__value settings-item__section"
              style={{ width: '72%' }}
            >
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
      </form>
    </SettingsLayout>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(UserSecurity);
