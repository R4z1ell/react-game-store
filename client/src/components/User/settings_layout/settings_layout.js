import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './settings_layout.scss';

import { FaLock, FaArchive, FaDatabase, FaUser } from 'react-icons/fa';

class SettingsLayout extends Component {
  componentDidMount() {
    if (
      this.props.history.location.pathname === '/user/settings/account' ||
      this.props.history.location.pathname === '/user/settings/security' ||
      this.props.history.location.pathname === '/user/settings/orders' ||
      this.props.history.location.pathname === '/admin/add_product'
    ) {
      let selectBody = document.body;
      selectBody.classList.add('body-bck');
    }
  }

  componentWillUnmount() {
    let selectBody = document.body;
    selectBody.classList.remove('body-bck');
  }

  render() {
    const accountStatus =
      this.props.history.location.pathname === '/user/settings/account'
        ? 'settings__nav-link is-active'
        : 'settings__nav-link';

    const securityStatus =
      this.props.history.location.pathname === '/user/settings/security'
        ? 'settings__nav-link is-active'
        : 'settings__nav-link';

    const ordersStatus =
      this.props.history.location.pathname === '/user/settings/orders'
        ? 'settings__nav-link is-active'
        : 'settings__nav-link';

    const addProductsStatus =
      this.props.history.location.pathname === '/admin/add_product'
        ? 'settings__nav-link is-active'
        : 'settings__nav-link';

    return (
      <div className="settings-layout">
        <div className="settings-layout__navigation">
          <ul className="settings__nav">
            <li className="settings__nav-item">
              <Link to={'/user/settings/account'} className={accountStatus}>
                <FaUser fill="#262626" className="settings__nav-icon" />
                Account
              </Link>
              <Link to={'/user/settings/security'} className={securityStatus}>
                <FaLock fill="#262626" className="settings__nav-icon" />
                Email and password
              </Link>
              <Link to={'/user/settings/orders'} className={ordersStatus}>
                <FaArchive fill="#262626" className="settings__nav-icon" />
                Orders History
              </Link>
              {this.props.user.userData.isAdmin ? (
                <Link to={'/admin/add_product'} className={addProductsStatus}>
                  <FaDatabase fill="#262626" className="settings__nav-icon" />
                  Add products
                </Link>
              ) : null}
            </li>
          </ul>
        </div>
        <div className="settings-layout__content settings-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(withRouter(SettingsLayout));
