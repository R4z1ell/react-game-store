import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header_account.scss';

class HeaderAccount extends Component {
  render() {
    return (
      <div className="menu-account__submenu">
        <div className="menu-account__user">
          <div className="menu-account__user-in">
            <img
              src="/images/avatar_medium.jpg"
              alt="avatar-medium"
              className="menu-account__user-avatar"
            />
            <span className="menu-header__label">Your account</span>
            <span className="menu-account__user-name">R4z1ell</span>
          </div>
        </div>
        <div className="menu-submenu-item">
          <Link to="/user/dashboard" className="menu-submenu-link">
            Your profile
          </Link>
        </div>
        <div className="menu-submenu-separator" />
        <div className="menu-submenu-item">
          <Link to="/user/games" className="menu-submenu-link">
            Games
          </Link>
        </div>
        <div className="menu-submenu-item">
          <Link to="/user/wishlist" className="menu-submenu-link">
            Wishlist
          </Link>
        </div>
        <div className="menu-submenu-separator" />
        <div className="menu-submenu-item">
          <Link to="/user/orders" className="menu-submenu-link">
            Orders History
          </Link>
        </div>
        <div className="menu-submenu-item">
          <Link to="/user/settings" className="menu-submenu-link">
            Settings
          </Link>
        </div>
        <div className="menu-submenu-separator" />
        <div className="menu-submenu-item">
          <div className="menu-submenu-link">Sign out</div>
        </div>
      </div>
    );
  }
}

export default HeaderAccount;
