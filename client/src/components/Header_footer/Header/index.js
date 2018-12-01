import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';

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
      <header className={style.header__bck}>
        <div className={style.header__container}>
          <div className={style.header__menu}>
            <div className={style.header__item}>
              STORE <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className={style.header__item}>
              BROWSE <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className={style.header__item}>ON SALE</div>
          </div>
          <div className={style.header__tray}>
            <div className={style.header__item}>
              <FontAwesomeIcon icon={faBell} />
              <span>0</span>
            </div>
            <div className={style.header__item}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>0</span>
            </div>
            <div className={style.header__item}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className={style.logo__container}>
            <Link to="/">
              <div className={style.logo__name}>JetDeals</div>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
