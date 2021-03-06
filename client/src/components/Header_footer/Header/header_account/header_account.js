import React from 'react';
import { Link } from 'react-router-dom';

import './header_account.scss';

const HeaderAccount = props => {
  const user = props.userData;

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
          <span className="menu-account__user-name">{user.username}</span>
        </div>
      </div>
      <div className="menu-submenu-item" onClick={props.closeHeaderAccount}>
        <Link to="/user/settings/account" className="menu-submenu-link">
          Your profile
        </Link>
      </div>
      <div className="menu-submenu-separator" />
      <div className="menu-submenu-item" onClick={props.closeHeaderAccount}>
        <Link to="/user/settings/orders" className="menu-submenu-link">
          Orders History
        </Link>
      </div>
      <div className="menu-submenu-item" onClick={props.closeHeaderAccount}>
        <Link to="/user/wishlist" className="menu-submenu-link">
          Wishlist
          {user.wishlist.length > 0 ? (
            <span className="menu-submenu-item__label">
              {user.wishlist.length}
            </span>
          ) : null}
        </Link>
      </div>
      <div className="menu-submenu-separator" />
      <div className="menu-submenu-item" onClick={props.closeHeaderAccount}>
        <div className="menu-submenu-link" onClick={props.logoutUser}>
          Sign out
        </div>
      </div>
    </div>
  );
};

export default HeaderAccount;
