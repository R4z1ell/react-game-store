import React from 'react';
import { Link } from 'react-router-dom';

import './settings_layout.scss';

import { FaLock, FaArchive, FaDatabase, FaUser } from 'react-icons/fa';

const SettingsLayout = props => {
  return (
    <div className="settings-layout">
      <div className="settings-layout__navigation">
        <ul className="settings__nav">
          <li className="settings__nav-item">
            <Link
              to={'/user/settings/account'}
              className="settings__nav-link is-active"
            >
              <FaUser fill="#262626" className="settings__nav-icon" />
              Account
            </Link>
            <Link
              to={'/user/settings/security'}
              className="settings__nav-link is-active"
            >
              <FaLock fill="#262626" className="settings__nav-icon" />
              Login and Security
            </Link>
            <Link
              to={'/user/settings/orders'}
              className="settings__nav-link is-active"
            >
              <FaArchive fill="#262626" className="settings__nav-icon" />
              Orders History
            </Link>
            <Link
              to={'/admin/add_product'}
              className="settings__nav-link is-active"
            >
              <FaDatabase fill="#262626" className="settings__nav-icon" />
              Add products
            </Link>
          </li>
        </ul>
      </div>
      <div className="settings-layout__content settings-content">
        {props.children}
      </div>
    </div>
  );
};

export default SettingsLayout;
