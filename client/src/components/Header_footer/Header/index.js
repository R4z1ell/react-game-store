import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faShoppingCart,
  faSearch,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render() {
    return (
      <header className="header__bck">
        <div className="header__container">
          <div className="header__menu">
            <div className="header__item">
              <Link to="/games">
                STORE <FontAwesomeIcon icon={faAngleDown} />
              </Link>
            </div>
            <div className="header__item">
              BROWSE <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className="header__item">ON SALE</div>
          </div>
          <div className="header__tray">
            <div className="header__item">
              <FontAwesomeIcon icon={faBell} />
              <span>0</span>
            </div>
            <div className="header__item">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>0</span>
            </div>
            <div className="header__item header__search">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
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
