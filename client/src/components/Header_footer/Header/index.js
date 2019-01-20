import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import HeaderTray from './header_tray/header_tray';

class Header extends Component {
  render() {
    return (
      <header className="header__bck">
        <div className="header__container">
          <div className="header__menu">
            <div className="header__item header__store">
              <Link to="/games">
                STORE <FontAwesomeIcon icon={faAngleDown} />
              </Link>
            </div>
            <div className="header__item">
              BROWSE <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className="header__item">ON SALE</div>
          </div>
          <HeaderTray />
          <div className="logo__container">
            <Link to="/">
              <div className="logo__name">JetDeals</div>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
