import React, { Component } from 'react';

import './header_login.scss';

class HeaderLogin extends Component {
  render() {
    return (
      <div className="menu-submenu">
        <div className="menu-header">
          <div
            className="menu-btn menu-btn--gray menu-btn__create-account"
            onClick={() => this.props.showSignUpModal(true)}
          >
            Create account
          </div>
          <span className="menu-header__separator" />
          <div
            className="menu-btn menu-btn__sign-in"
            onClick={() => this.props.showLoginModal(true)}
          >
            Sign in
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderLogin;
